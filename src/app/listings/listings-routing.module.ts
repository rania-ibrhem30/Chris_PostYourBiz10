import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';
import { ListingDetailsPageComponent } from './listing-details-page/listing-details-page.component';

const routes: Routes = [
  { path: '', component: ListingsComponent },
  { path: 'grid', component: ListingsComponent },
  {path:'map',component:MapComponent},
  {path:'photos',component:PhotosComponent},
  {path:'details/:id',component:ListingDetailsPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingsRoutingModule { }
