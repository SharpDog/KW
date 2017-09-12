import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';

import { AgmCoreModule } from '@agm/core';
import { GmapComponent } from './gmap/gmap.component';

import { GrowlModule } from 'primeng/primeng';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [
    FormsModule,
    GrowlModule,
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
