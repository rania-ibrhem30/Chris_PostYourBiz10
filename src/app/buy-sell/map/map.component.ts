import { Component } from '@angular/core';
import { ServicesListingService } from 'src/app/listings/services/services-listing.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  data:any[]=[]
  fliterarray:any[]=[]
  first = 0; 
  rows = 2; 
  loading:boolean=false;
  constructor(public service:ServicesListingService){}

  getlisting(){
    this.loading=true
    this.service.GetListing().subscribe((res:any)=>{
      this.loading=false

      this.data=res
     console.log(this.data)
    })
  }
  fliterlistingBIZ(){
    this.loading=true

    this.service.fliterListing().subscribe((res:any)=>{
      this.loading=false

      this.fliterarray= res;
      console.log(res)



    })
  }
  onPageChange(event: any): void {
    this.first = event.first;
  }
  ngOnInit(): void {
    this.getlisting()
  }

}
