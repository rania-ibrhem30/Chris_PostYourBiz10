import { Component } from '@angular/core';
import { ServicesListingService } from '../services/services-listing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similarwork',
  templateUrl: './similarwork.component.html',
  styleUrls: ['./similarwork.component.scss']
})
export class SimilarworkComponent {
  data:any[]=[];
  id : any;
  itemId:any
constructor(private service:ServicesListingService , private router:ActivatedRoute){
  this.id = router.snapshot.paramMap.get('id');

}
  getlisting() {
    this.service.GetListing().subscribe((res: any) => {
      this.data = res
      console.log(this.data)

    })
  }
  getdetalisId() {
    this.service.GetListingByID(this.id).subscribe((res : any) => {
        this.data = res.data;
    });
}
ngOnInit(): void {
  this.getlisting();

}
}
