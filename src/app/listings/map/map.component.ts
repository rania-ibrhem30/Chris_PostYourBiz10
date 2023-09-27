import { Component } from '@angular/core';
import { ServicesListingService } from '../services/services-listing.service';

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
  constructor(private service:ServicesListingService){}

  getlisting(){
    this.service.GetListing().subscribe((res:any)=>{
      this.data=res
     console.log(this.data)
    })
  }
  fliterlistingBIZ(){
    this.service.fliterListing().subscribe((res:any)=>{
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
