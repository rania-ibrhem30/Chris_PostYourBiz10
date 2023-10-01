import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ListingsComponent,
    MapComponent,
    PhotosComponent,
    ListingDetailsPageComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ListingsRoutingModule,PrimeNgModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
    
    
  ],
 
})
export class ListingsModule { }
