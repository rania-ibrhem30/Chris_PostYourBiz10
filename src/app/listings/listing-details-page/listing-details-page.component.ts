import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ServicesListingService} from '../services/services-listing.service';
import {ActivatedRoute} from '@angular/router';
@Component({selector: 'app-listing-details-page', templateUrl: './listing-details-page.component.html', styleUrls: ['./listing-details-page.component.scss']})
export class ListingDetailsPageComponent {
    id : any;
    datainfo : any;
    imgs : any[] = [];
    photo : any[] = [];
    twoImgs : boolean = false;
    displayCount : number = 4;
    img : any[] = [];
    isVisible = false;
    displayBasic : boolean = false;
    galleryphotos : string[] = [];
    galleryphotosmobile : string[] = [];
    data:any[]=[];
    itemId:any;

    constructor(private service : ServicesListingService, private route:ActivatedRoute) {
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
    getdetalisId(id:any) {
        this.service.GetListingByID(this.id).subscribe((res : any) => {
            this.datainfo = res.data;
            this.galleryphotos = res.data.images;
            this.imgs = res.data.images;

            if (this.imgs.length == 2) {
                this.twoImgs = true;
            }
            // console.log(this.imgs)
            // console.log("rania", res);
            // console.log(this.imgs);
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

    getimges() {
      this.service.GetListingByID(this.id).subscribe((res : any) => {
          this.datainfo = res.data;
          this.galleryphotos = res.data.images;
      });
  }

    ngOnInit(): void {
        this.galleryphotos = this.img;
       this.route.params.subscribe(params =>{
        console.log()
        this.getdetalisId(params);

     })

    }
  
}
