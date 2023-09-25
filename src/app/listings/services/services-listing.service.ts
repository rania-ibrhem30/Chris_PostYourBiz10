import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesListingService {

  constructor(private _http: HttpClient) { }

  GetListing(){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-businesses-website-request/${environment.SITE_DOMAIN}`)
  }
  GetListingByID(id:any){
    return this._http.get(`${environment.BACKEND_DOMAIN}/get-business/${id}`);
  }

}
