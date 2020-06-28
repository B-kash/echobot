import {Router} from "express";
import {MessageController} from "../controllers/MessageController";

export class MessageRoute{
    public router: Router;
    public messageController: MessageController = new MessageController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        this.router.get('/message', this.messageController.echoMessage);
    }
}
