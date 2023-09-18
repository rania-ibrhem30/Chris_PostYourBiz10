import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components-shared/home/home.component';
import { FooterComponent } from './Components-shared/footer/footer.component';
import { NavbarComponent } from './Components-shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
