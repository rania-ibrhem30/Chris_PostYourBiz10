import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {RouterModule } from '@angular/router';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegsiterComponent,
    RestPasswordComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    PrimeNgModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class AuthModule { }
