import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostingService } from '../services/posting.service';

@Component({
  selector: 'app-posting-detalis-page',
  templateUrl: './posting-detalis-page.component.html',
  styleUrls: ['./posting-detalis-page.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PostingDetalisPageComponent {
  id : any;
  datainfo : any;
  photo : any[] = [];
  twoImgs : boolean = false;
  displayCount : number = 4;
  img: any;
  isVisible = false;
  galleryphotos : string[] = [];
  imgs: any[] = [];
  displayCustom: boolean = true; 
  activeIndex: number = 0;
  timepost:any;
  loading:boolean = false
  displayBasic:boolean=true
  constructor(private service : PostingService, private route:ActivatedRoute) {
      this.id = route.snapshot.paramMap.get('id');
  }

 
  getdetalisId() {
   this.loading = true
      this.service.GetPostingByID(this.id).subscribe((res : any) => {
        this.loading= false
          this.datainfo = res.data;
          this.timepost=res.data.dates
          this.galleryphotos = res.data.images;
          this.imgs = res.data.images;
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

//   getImages() {
//     this.service.GetPostingByID(this.id).subscribe((res: any) => {
//       this.datainfo = res.data;
//       this.galleryphotos = res.data.images;
//       this.imgs = this.galleryphotos.map((image: any) => ({
//         itemImageSrc: image.url
//       }));
//       this.displayCustom = false;
//     });
  
// }

  ngOnInit(): void {
      this.getdetalisId();
      this.getImages()
      this.galleryphotos = this.img;

  }

getImages(): void {
  this.loading=true
    this.service.GetPostingByID(this.id).subscribe((res: any) => {
      this.loading=false
      this.datainfo = res.data;
      this.imgs = res.data.images;
      console.log(this.imgs)
    });
  }

  imageClick(index: number): void {
    console.log('Image clicked at index:', index);
    this.displayCustom = true
  }

  
}


