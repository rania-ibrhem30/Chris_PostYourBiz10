import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuySellRoutingModule } from './buy-sell-routing.module';
import { BuySellComponent } from './buy-sell.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuySellComponent,
    MapComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    BuySellRoutingModule,
    PrimeNgModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ]
})
export class BuySellModule { }
