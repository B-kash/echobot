import {Component, OnInit} from '@angular/core';
import {Message, UserType} from "../model/Message";
import {MessageHistoryService} from "../services/message-history.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageHistory: Message[] = [];

  constructor(private messageHistoryService: MessageHistoryService) {
    this.generateWelcomeMessage().catch((err) => {
      console.log('Error while getting Message', err);
      //  TODO handle error and show on UI
    });
  }

  ngOnInit(): void {
  }

  private async generateWelcomeMessage() {
    const message: Message = {
      text: 'Hello, I am echo bot. Talk to me and find out what I can do.',
      seenTime: null,
      sentTime: new Date(),
      sentBy: UserType.Bot
    };

    await this.messageHistoryService.getWelcomeMessage();
    this.messageHistory = this.messageHistoryService.getHistory();
  }

  sendMessage(message: Message): void {
    this.messageHistoryService.sendMessage(message).then((res) => {
      this.messageHistory = this.messageHistoryService.getHistory();
    }).catch((err) => {
      console.log('Error while sending Message', err);
      //  TODO handle error and show on UI
    });
  }
}
