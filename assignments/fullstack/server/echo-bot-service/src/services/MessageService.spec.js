const {MessageService} = require("../../dist/services/MessageService");
const {UserType} = require('../../dist/model/Message');

describe('Message Service tests', () => {
    let messageService;
    beforeEach(() => {
        messageService = new MessageService();

    });
    const defaultWelcomeMessage = {
        text: 'Welcome to echo bot',
        sentTime: new Date(),
        seenTime: null,
        sentBy: UserType.Bot
    };
    it('should generate default welcome message', () => {
        // Time is not tested as it will vary
        expect(messageService.welcomeMessage().text).toEqual(defaultWelcomeMessage.text);
        expect(messageService.welcomeMessage().sentBy).toEqual(defaultWelcomeMessage.sentBy);
    });
    it('should read and return same message with its changes', () => {
        const userMessage = {...defaultWelcomeMessage, userType: UserType.User};
        const expectedMessage = {
            text: 'Welcome to echo bot',
            sentTime: new Date(),
            seenTime: null,
            sentBy: UserType.Bot
        };
        let returnedMessage = messageService.readAndRespondMessage(userMessage);
        // Time is not tested as it will vary
        expect(returnedMessage.text).toEqual(expectedMessage.text);
        expect(returnedMessage.sentBy).toEqual(expectedMessage.sentBy);
    })
});
