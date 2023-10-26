import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { PostingService } from './services/posting.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PostingComponent {
  postingarray:any[] = [];
  fliterarray:any[] = [];
  searcharray:any[]=[];
  cities: any[] | undefined;
  categories:any[]|undefined;
  categoriesName:string|any
  citiesName: string | any;
  StatesName:any[] | undefined;
  state:string|any;
  formGroup: FormGroup | undefined;
  Subscription!: Subscription;
  fliterbody!:FormGroup;
  filterForm: any;
  first = 0; 
  rows = 20; 
  searchQuery: string = '';
  loading:boolean =false
  sortedArray: any[] = [];



  constructor(public service:PostingService){
  }
  posting(){
    this.loading=true
    this.service.GetPosting().subscribe((res:any)=>{
      this.loading=false

      this.postingarray=res.data
     console.log(this.postingarray)
     
    })
  }

  
  onPageChange(event: any): void {
    this.first = event.first;
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

    this.posting()
  }
 
  
}
