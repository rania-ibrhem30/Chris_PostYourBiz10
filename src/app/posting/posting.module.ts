import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostingComponent,
    MapComponent,
    PhotosComponent,
    
    
  ],
  imports: [
    CommonModule,
    PostingRoutingModule,
    PrimeNgModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    
  ]
})
export class PostingModule { }
