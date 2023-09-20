import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-listing-details-page',
  templateUrl: './listing-details-page.component.html',
  styleUrls: ['./listing-details-page.component.scss']
})
export class ListingDetailsPageComponent {
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
  
}
