import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesListingService } from 'src/app/listings/services/services-listing.service';

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
  data:any[] = [];
  fliterarray:any[] = [];
  searcharray:any[]=[];
  StatesName:any[] | undefined;
  state:string|any;
  formGroup: FormGroup | undefined;
  Subscription!: Subscription;
  fliterbody!:FormGroup;
  filterForm: any;
 loader:boolean =false
   first = 0; 
   rows = 2; 

  constructor(public service:ServicesListingService , private router:Router){
  }
 
 
  fliterlistingBIZ(){
    this.service.fliternavbar().subscribe((res:any)=>{
      console.log(res)
      this.router.navigate(['/Listings/grid'])
      



    })
  }
  ngOnInit(): void {
    this.StatesName = [
      { name: "All", cities: "AL" },
      { name: "Alabama", cities: "AL" },
      { name: "Alaska", code: "AK" },
      { name: "Arizona", code: "AZ" },
      { name: "Arkansas", code: "AR" },
      { name: "California", code: "CA" },
      { name: "Colorado", code: "CO" },
      { name: "Connecticut", code: "CT" },
      { name: "Delaware", code: "DE" },
      { name: "Florida", code: "FL" },
      { name: "Georgia", code: "GA" },
      { name: "Hawaii", code: "HI" },
      { name: "Idaho", code: "ID" },
      { name: "Illinois", code: "IL" },
      { name: "Indiana", code: "IN" },
      { name: "Iowa", code: "IA" },
      { name: "Kansas", code: "KS" },
      { name: "Kentucky", code: "KY" },
      { name: "Louisiana", code: "LA" },
      { name: "Maine", code: "ME" },
      { name: "Maryland", code: "MD" },
      { name: "Massachusetts", code: "MA" },
      { name: "Michigan", code: "MI" },
      { name: "Minnesota", code: "MN" },
      { name: "Mississippi", code: "MS" },
      { name: "Missouri", code: "MO" },
      { name: "Montana", code: "MT" },
      { name: "Nebraska", code: "NE" },
      { name: "Nevada", code: "NV" },
      { name: "New Hampshire", code: "NH" },
      { name: "New Jersey", code: "NJ" },
      { name: "New Mexico", code: "NM" },
      { name: "New York", code: "NY" },
      { name: "North Carolina", code: "NC" },
      { name: "North Dakota", code: "ND" },
      { name: "Ohio", code: "OH" },
      { name: "Oklahoma", code: "OK" },
      { name: "Oregon", code: "OR" },
      { name: "Pennsylvania", code: "PA" },
      { name: "Rhode Island", code: "RI" },
      { name: "South Carolina", code: "SC" },
      { name: "South Dakota", code: "SD" },
      { name: "Tennessee", code: "TN" },
      { name: "Texas", code: "TX" },
      { name: "Utah", code: "UT" },
      { name: "Vermont", code: "VT" },
      { name: "Virginia", code: "VA" },
      { name: "Washington", code: "WA" },
      { name: "West Virginia", code: "WV" },
      { name: "Wisconsin", code: "WI" },
      { name: "Wyoming", code: "WY" },
    ];
     this.categories = [
      { name: "MASSAGE SPA", cities: "SPA" },
      { name: "RESTAURANTS ", cities: "RS" },
      { name: "BEAUTY SALON SPA", code: "BS" },
    ];

  }
  ngDoCheck(): void {
   
  }
}
