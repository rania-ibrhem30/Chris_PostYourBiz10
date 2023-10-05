import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesListingService {
  filterbody: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null)
  });
  filterbodynav: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null)
  });
  filterbodyhome: FormGroup = new FormGroup({
    state: new FormControl<string | null>(null),
    categoriesName:new FormControl<string | null>(null)
  });
  constructor(private _http:HttpClient){}

  GetListing(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`)
  }
  GetListingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }
  fliterListing(dynamicBody:any = {state:this.filterbody.value.state.name}){
    // let body ={
    //   state:this.filterbody.value.state.name,
    // }
    return this._http.post(`${environment.BACKEND_DOMAIN}/filter-business-website-request/${environment.SITE_DOMAIN}`,dynamicBody ,{
      observe: 'response',
    })
  }
  fliternavbar(){
    let body ={
      state:this.filterbodynav.value.state.name
    }
    return this._http.post(`${environment.BACKEND_DOMAIN}/filter-business-website-request/${environment.SITE_DOMAIN}`,body ,{
      observe: 'response',
    })
  }
  filterbodyhomepage(){
    let body ={
      state:this.filterbodyhome.value.state.name
    }
    return this._http.post(`${environment.BACKEND_DOMAIN}/filter-business-website-request/${environment.SITE_DOMAIN}`,body ,{
      observe: 'response',
    })
  }
}
