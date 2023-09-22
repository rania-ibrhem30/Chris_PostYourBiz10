import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';



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
      TabViewModule
      

  ],
})
export class PrimeNgModule { }
