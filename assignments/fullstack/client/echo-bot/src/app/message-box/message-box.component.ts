import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message, UserType} from "../model/Message";

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  @Output() messageEmitter = new EventEmitter<Message>();
  text: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSend(): void {
    const message: Message = {
      text: this.text,
      sentBy: UserType.User,
      sentTime: new Date(),
      seenTime: null
    };
    this.messageEmitter.emit(message);
    this.text = '';
  }
}
