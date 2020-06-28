import {Message} from "../model/Message";

export class MessageService {

    public readAndRespondMessage(message: Message): Message {
        message.seenTime = new Date();
        // Later on this message can be saved to the DB if need be
        return message;
    }

    public welcomeMessage(): Message {
        return {
            text: 'Welcome to echo bot',
            sentTime: new Date(),
            seenTime: null,
        };
    }
}
