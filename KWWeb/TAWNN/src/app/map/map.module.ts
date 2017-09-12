import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBFkcGyL4LHxNY_UN6TCVDOBnEVX_amDZI",
      libraries: ["places"]
    })
  ],
  declarations: [
    MapComponent
  ]
})
export class MapModule { }
