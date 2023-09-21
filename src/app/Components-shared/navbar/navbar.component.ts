import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NavbarComponent {
  sidebarVisible: boolean = false;
  sidebarVisible1: boolean = false;
  sidebarVisible2:boolean=false
  cities: any[] | undefined;
  categories:any[]|undefined;
  categoriesName:string|any
  citiesName: string | any;
  
}
