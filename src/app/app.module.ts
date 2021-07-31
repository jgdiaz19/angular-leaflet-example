import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopUpService } from './popup.service';
import { ShapeService } from './shape.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopUpService,
    ShapeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
