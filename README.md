## Steps to run

- Clone repository in your local machine
- Open the `index.js` file located in the root project directory. Replace "pusher-dot-com-key" with your pusher.com key and "pusher-dot-com-secret" with your pusher.com secret
- Open the `environment.ts` file in the `/src/environments` directory. Replace "pusher-dot-com-key" with your pusher.com key
- Run `npm install` in the terminal to install the required dependencies
- Run `node index.js` for the node server to listen on `http://localhost:8000`
- Open another terminal and run `npm start` for the angular chat app to serve. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files