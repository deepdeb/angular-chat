import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  username = 'username';
  message = '';
  messages = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher(environment.pusherKey, {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      this.messages.push(data);
    });
  }

  submit(): void {
    this.http
      .post('http://localhost:8000/api/messages', {
        username: this.username,
        message: this.message,
      })
      .subscribe(() => (this.message = ''));
  }
}
