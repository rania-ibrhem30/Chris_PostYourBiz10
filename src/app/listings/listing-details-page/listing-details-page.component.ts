import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesListingService } from '../services/services-listing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-details-page',
  templateUrl: './listing-details-page.component.html',
  styleUrls: ['./listing-details-page.component.scss']
})
export class ListingDetailsPageComponent {
  id:any
  datainfo:any;
  imgs:any[]=[]
  twoImgs:boolean = false
constructor( private service:ServicesListingService , private route:ActivatedRoute){
  this.id=route.snapshot.paramMap.get("id")

}

  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    nav: false
  }
  getdetalisId() {
    this.service.GetListingByID(this.id).subscribe((res: any) => {
      this.datainfo = res.data;
      this.imgs=res.data.images;
      if(this.imgs.length == 2){
        this.twoImgs=true
      }
      console.log(this.imgs)
      console.log("rania", res);
  
     
    });
  }
  
  ngOnInit(): void {
    this.getdetalisId()
  }
}
