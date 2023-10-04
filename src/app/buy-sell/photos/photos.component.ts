import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ServicesListingService } from 'src/app/listings/services/services-listing.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  data:any[]=[]
  loading:boolean= false;
  constructor(private service:ServicesListingService){}

  getlisting(){
    this.loading=true
    this.service.GetListing().subscribe((res:any)=>{
      this.loading=false

      this.data=res
     console.log(this.data)
    })
  }
  ngOnInit(): void {
    this.getlisting()
  }
}
