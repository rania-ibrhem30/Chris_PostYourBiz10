import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  filterbody: any;

  constructor(public _http:HttpClient) { }

  GetPosting(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`)
  }
  GetPostingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }
  fliterPosting(){
    let body ={
      state:this.filterbody.value.state.name,
    }
    return this._http.post(`${environment.BACKEND_DOMAIN}/filter-business-website-request/${environment.SITE_DOMAIN}`,body ,{
      observe: 'response',
    })
  }
}
