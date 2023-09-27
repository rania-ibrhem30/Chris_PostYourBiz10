import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesListingService {
  filterbody: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null)
  });
  constructor(private _http: HttpClient) { }

  GetListing(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`)
  }
  GetListingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }
  fliterListing(){
    let body ={
      state:this.filterbody.value.state.name
    }
    return this._http.post(`${environment.BACKEND_DOMAIN}/filter-business-website-request/${environment.SITE_DOMAIN}`,body ,{
      observe: 'response',
    })
  }
}
