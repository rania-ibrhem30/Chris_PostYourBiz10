import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostingComponent } from './posting.component';
import { PostingDetalisPageComponent } from './posting-detalis-page/posting-detalis-page.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', component: PostingComponent },
  { path: 'posting', component: PostingComponent },
  { path: 'map', component: MapComponent },
  { path: 'photos', component: PhotosComponent },


  {path:'details/:id',component:PostingDetalisPageComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostingRoutingModule { }
