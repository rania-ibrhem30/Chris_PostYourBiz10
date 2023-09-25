import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListingsComponent,
    MapComponent,
    PhotosComponent,
    ListingDetailsPageComponent
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,PrimeNgModule,
    FormsModule,
    CarouselModule,
    HttpClientModule
  ]
})
export class ListingsModule { }
