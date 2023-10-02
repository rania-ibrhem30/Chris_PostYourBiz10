import { Component } from '@angular/core';
import { ServicesListingService } from 'src/app/listings/services/services-listing.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
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
