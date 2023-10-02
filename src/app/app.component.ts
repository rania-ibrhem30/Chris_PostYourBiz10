import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Site-10';
  auth: boolean = false;

constructor( private route:Router){}

  ngDoCheck(): void {
    if (this.route.url == '/auth/login' || this.route.url == '/auth/register' ||this.route.url =='/auth/resetpassword' ||this.route.url =='/auth/forgetpassword' 
    || this.route.url == '/contact-us'
    
    ) {
      this.auth = false;
    } else {
      this.auth = true;
    }
  }
}
