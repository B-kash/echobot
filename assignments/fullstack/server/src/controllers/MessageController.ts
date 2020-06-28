import {Request, Response} from "express";
import {Message} from "../model/Message";
import {MessageService} from "../services/MessageService";

export class MessageController {
    messageService: MessageService = new MessageService();

    constructor() {
    }

    public async echoMessage(request: Request, response: Response): Promise<void> {
        const message: Message = request.body;
        response.status(200)
            .send(this.messageService.readAndRespondMessage(message));
    }
}
