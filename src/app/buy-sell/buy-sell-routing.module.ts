import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuySellComponent } from './buy-sell.component';
import { MapComponent } from './map/map.component';
import { PhotosComponent } from './photos/photos.component';
import { BuySellDetalisComponent } from './buy-sell-detalis/buy-sell-detalis.component';

const routes: Routes = [
  { path: '', component: BuySellComponent },
  { path: 'bu', component: BuySellComponent },
  { path: 'map', component: MapComponent },
  { path: 'photos', component: PhotosComponent },
  {path:'details/:id',component:BuySellDetalisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuySellRoutingModule { }
