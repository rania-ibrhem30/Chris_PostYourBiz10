import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
      DropdownModule,
      SliderModule,
      InputTextModule ,
      

  ],
})
export class PrimeNgModule { }
