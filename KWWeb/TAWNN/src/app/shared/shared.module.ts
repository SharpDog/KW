import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { GmapComponent } from './gmap/gmap.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFkcGyL4LHxNY_UN6TCVDOBnEVX_amDZI',
      libraries: ['places']
    }),

    CommonModule
  ],
  declarations: [
    LoaderComponent,
    GmapComponent
  ],
  exports: [
    LoaderComponent,
    GmapComponent
  ]
})
export class SharedModule { }
