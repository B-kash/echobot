## Project description
This project consists of a node backend and an angular front end echo bot.An example EchoBot is set up here: https://chatbox.staging.chatlayer.ai/5ef5aabd99110809d2374df3?language=en

### BackEnd
The backend is a nodejs RESTFUL server that receives the message and returns whatever it received.

#### How to run standalone backend 
- Navigate to server project directory by running `cd assignments/fullstack/server/echo-bot-service/` in the terminal.
- Make sure the dependencies are installed by `npm install` in the terminal.
- Run `npm run start` from the current directory. <br><br>
The application will be run on port `8080`. To verify that the application started, a message will be logged on the console. 
The port can be changed from `.env` file located at  `assignments/fullstack/server/echo-bot-service`.

#### How to run standalone frontend 
- Make sure you have angular cli installed `npm install -g @angular/cli`.
- Navigate to client project directory by running `cd assignments/fullstack/client/echo-bot/` in the terminal.
- Make sure the dependencies are installed by `npm install` in the terminal.
- Run `npm run start` or `ng serve` from the current directory.
The application will be run on port `4200`. A confirmation message will also be shown in the terminal. To run the application on different port, run  `ng serve --port yourdesiredport`.
