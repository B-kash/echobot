import express, {Express} from "express";
import bodyParser from "body-parser";
import {MessageRoute} from "./routes/MessageRoute";

export class Server {
    private readonly app: Express;


    constructor() {
        // Add Express as your app
        this.app = express();
        this.configureServerMiddleware();
        this.manageRoutes();

    }

    private configureServerMiddleware() {
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(bodyParser.json());
    }
    start(): void {
        const port = Number(process.env.SERVER_PORT ?? 8080);
        this.app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });
    }
    private manageRoutes(): void {
        this.app.use('/message', new MessageRoute().router);
    }

}
