import { Component } from '@angular/core';
import { ServicesListingService } from '../services/services-listing.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  data:any[]=[]
  constructor(private service:ServicesListingService){}

  getlisting(){
    this.service.GetListing().subscribe((res:any)=>{
      this.data=res
     console.log(this.data)
    })
  }
  ngOnInit(): void {
    this.getlisting()
  }

}
