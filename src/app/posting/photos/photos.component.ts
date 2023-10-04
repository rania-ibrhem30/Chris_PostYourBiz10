import { Component } from '@angular/core';
import { ServicesListingService } from 'src/app/listings/services/services-listing.service';
import { PostingService } from '../services/posting.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  data:any[]=[]
  constructor(private service:PostingService){}

  posting(){
    this.service.GetPosting().subscribe((res:any)=>{
      this.data=res.data
     console.log(this.data)
    })
  }
  ngOnInit(): void {
    this.posting()
  }

}
