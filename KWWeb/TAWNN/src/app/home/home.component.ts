import 'rxjs/add/operator/finally';

import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Message } from 'primeng/components/common/api';

import { ToasterService } from '../core/toaster.service';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  quote: string;
  isLoading: boolean;
  objToaster: Message[];

  constructor(private quoteService: QuoteService,
              private toasterService: ToasterService)
  {
    this.objToaster = [];
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .finally(() => { this.isLoading = false; })
      .subscribe((quote: string) => { this.quote = quote; });
  }

  ngAfterViewInit() {
    this.toasterService.toasterStatus.subscribe((val: Message) => {
      if (val)
        this.objToaster.push(val);
    });
  }
}
