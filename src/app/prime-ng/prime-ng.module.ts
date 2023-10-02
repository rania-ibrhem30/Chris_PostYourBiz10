import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
      DropdownModule,
      SliderModule,
      InputTextModule ,
      SidebarModule,
      ButtonModule,
      PaginatorModule,
      TabViewModule,
      GalleriaModule,
      PasswordModule
      
      

  ],
})
export class PrimeNgModule { }
