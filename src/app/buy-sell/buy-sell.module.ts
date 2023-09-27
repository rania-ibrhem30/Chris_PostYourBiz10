import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellRoutingModule } from './buy-sell-routing.module';
import { BuySellComponent } from './buy-sell.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    BuySellComponent,
    MapComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    BuySellRoutingModule
  ]
})
export class BuySellModule { }
