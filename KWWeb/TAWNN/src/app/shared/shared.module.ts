import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';

import { AgmCoreModule } from '@agm/core';
import { GmapComponent } from './gmap/gmap.component';

import { ToasterModule } from 'angular2-toaster';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ToasterModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFkcGyL4LHxNY_UN6TCVDOBnEVX_amDZI',
      libraries: ['places']
    }),
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    GmapComponent,
    MessageComponent
  ],
  exports: [
    LoaderComponent,
    GmapComponent,
    MessageComponent
  ]
})
export class SharedModule { }
