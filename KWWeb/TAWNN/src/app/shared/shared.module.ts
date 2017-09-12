import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';


import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { GmapComponent } from './gmap/gmap.component';

@NgModule({
  imports: [
    AgmCoreModule,
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
