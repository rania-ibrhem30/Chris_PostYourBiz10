import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components-shared/home/home.component';
import { FooterComponent } from './Components-shared/footer/footer.component';
import { NavbarComponent } from './Components-shared/navbar/navbar.component';
import { ContactUsComponent } from './Components-shared/contact-us/contact-us.component';
import { TermsConditionsComponent } from './Components-shared/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contact-us', component:ContactUsComponent },
  {path:'Terms-Conditions',component:TermsConditionsComponent},
  { path: 'Listings', loadChildren: () => import('./listings/listings.module').then(m => m.ListingsModule) },
  { path: 'posting', loadChildren: () => import('./posting/posting.module').then(m => m.PostingModule) },
  { path: 'Buy-Sell', loadChildren: () => import('./buy-sell/buy-sell.module').then(m => m.BuySellModule) },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
