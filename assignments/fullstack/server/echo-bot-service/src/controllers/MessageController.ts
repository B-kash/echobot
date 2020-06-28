import {Request, Response} from "express";
import {Message} from "../model/Message";
import {MessageService} from "../services/MessageService";

export class MessageController {
    messageService: MessageService = new MessageService();
    welcomeMessage = async (request: Request, response: Response): Promise<void> => {

        response.status(200)
            .send(this.messageService.welcomeMessage());
    };

    echoMessage = async (request: Request, response: Response): Promise<void> => {
        const message: Message = request.body;
        response.status(200)
            .send(this.messageService.readAndRespondMessage(message));
    };
}
