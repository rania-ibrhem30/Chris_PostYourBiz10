import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostingRoutingModule } from './posting-routing.module';
import { PostingComponent } from './posting.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    PostingComponent,
    MapComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PostingRoutingModule
  ]
})
export class PostingModule { }
