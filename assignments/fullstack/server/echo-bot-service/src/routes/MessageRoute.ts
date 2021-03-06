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
        this.router.post('/echo', this.messageController.echoMessage);
        this.router.get('/', this.messageController.welcomeMessage);
    }
}
