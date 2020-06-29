## Echo bot
This project consists of a node backend and an angular front end echo bot.An example EchoBot is set up here: https://chatbox.staging.chatlayer.ai/5ef5aabd99110809d2374df3?language=en

### How to run

- Run `npm run prepare-all` on the terminal.
- Run `npm run start-all` on the terminal.


The server should start on port `8080` and client on port `4200` by default.
If you are having trouble running the application, try running them one by one as described below.

### BackEnd
The backend is a nodejs RESTFUL server that receives the message and returns whatever it received.

#### How to run standalone backend 
- Navigate to server project directory by running `cd assignments/fullstack/server/echo-bot-service/` in the terminal.
- Make sure the dependencies are installed by `npm install` in the terminal.
- Run `npm run start` from the current directory.


The application will be run on port `8080`. To verify that the application started, a message will be logged on the console. 
The port can be changed from `.env` file located at  `assignments/fullstack/server/echo-bot-service`.

### FrontEnd
The frontEnd is written in angular. The css is design is referred from [here](https://codepen.io/sajadhsm/pen/odaBdd).

#### How to run standalone frontend 

- Make sure you have angular cli installed `npm install -g @angular/cli`.
- Navigate to client project directory by running `cd assignments/fullstack/client/echo-bot/` in the terminal.
- Make sure the dependencies are installed by `npm install` in the terminal.
- Run `npm run start` or `ng serve` from the current directory.


The application will be run on port `4200`. A confirmation message will also be shown in the terminal. To run the application on different port, run  `ng serve --port yourdesiredport`.
