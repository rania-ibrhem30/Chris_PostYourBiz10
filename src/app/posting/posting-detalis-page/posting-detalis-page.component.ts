import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesListingService } from 'src/app/listings/services/services-listing.service';
import { PostingService } from '../services/posting.service';

@Component({
  selector: 'app-posting-detalis-page',
  templateUrl: './posting-detalis-page.component.html',
  styleUrls: ['./posting-detalis-page.component.scss']
})
export class PostingDetalisPageComponent {
  id : any;
  datainfo : any;
  imgs : any[] = [] ;
  photo : any[] = [];
  twoImgs : boolean = false;
  displayCount : number = 4;
  img: any;
  isVisible = false;
  displayBasic : boolean = false;
  galleryphotos : string[] = [];
  galleryphotosmobile : string[] = [];
  displayCustom: boolean = false;
  activeIndex: number = 0;
  images: any[] | undefined;

  constructor(private service : PostingService, private route:ActivatedRoute) {
      this.id = route.snapshot.paramMap.get('id');
  }

  customOptions : OwlOptions = {
      loop: true,
      autoplay: false,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 1000,
      navText: [
          '', ''
      ],
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
  };
  getdetalisId() {
      this.service.GetPostingByID(this.id).subscribe((res : any) => {
          this.datainfo = res.data;
          this.galleryphotos = res.data.images;
          this.imgs = res.data.images;

          if (this.imgs.length == 2) {
              this.twoImgs = true;
          }
          console.log(this.galleryphotos);
      });
  }

  responsiveOptions : any[] = [
      {
          breakpoint: '1500px',
          numVisible: 5
      }, {
          breakpoint: '1024px',
          numVisible: 3
      }, {
          breakpoint: '768px',
          numVisible: 2
      }, {
          breakpoint: '560px',
          numVisible: 1
      },
  ];

  getImages() {
    this.service.GetPostingByID(this.id).subscribe((res: any) => {
      this.datainfo = res.data;
      this.galleryphotos = res.data.images;
      this.imgs = this.galleryphotos.map((image: any) => ({
        itemImageSrc: image.url
      }));
      this.displayCustom = true;
    });
  
}

  ngOnInit(): void {
      this.getdetalisId();
      this.galleryphotos = this.img;
  }
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}

}
