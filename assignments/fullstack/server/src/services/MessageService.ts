import {Message} from "../model/Message";

export class MessageService {

    constructor() {
    }

    public readAndRespondMessage(message: Message): Message {
        message.seenTime = new Date();
        // Later on this message can be saved to the DB if need be
        return message;
    }
}
