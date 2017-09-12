import { Component } from '@angular/core';

import { ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent {

  public toasterconfig : ToasterConfig =
    new ToasterConfig({
      timeout: 2000,
      animation: 'fade'
    });
}
