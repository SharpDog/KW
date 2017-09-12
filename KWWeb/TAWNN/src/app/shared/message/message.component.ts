import 'rxjs/add/operator/finally';

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Message } from 'primeng/components/common/api';

import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers: [MessageService]
})

export class MessageComponent implements AfterViewInit {

  objMessage: Message[];

  constructor(private messageService: MessageService)
  {
    this.objMessage = [];
  }

  ngAfterViewInit() {
    this.messageService.messageStatus.subscribe((val: Message) => {
      if (val) {
        this.objMessage.push(val);
      }
    });
  }
}
