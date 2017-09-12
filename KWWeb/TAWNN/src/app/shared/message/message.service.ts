import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Message } from 'primeng/primeng';

@Injectable()
export class MessageService {
  public messageStatus: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);

  //type: success, info, warn, error
  public showMessage(type: string, header: string, content: string) {
    let messageObj: Message = { severity: type, summary: header, detail: content };
    this.messageStatus.next(messageObj);
  }

  public hideMessage() {
    this.messageStatus.next(null);
  }
}
