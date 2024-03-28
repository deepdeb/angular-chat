## Steps to run

- Clone repository in your local machine
- Replace the value of pusherKey variable in the `environment.ts` file in the folder `/src/environments` with your own pusher.com app key
- Run `npm install` in the terminal to install the required dependencies
- Run `node index.js` for the nodejs app to listen on `http://localhost:8000`
- Open another terminal and run `npm start` for the angular chat app to serve. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files