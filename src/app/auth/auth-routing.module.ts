import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: AuthComponent },
  { path: 'register', component:RegsiterComponent },
  { path: 'resetpassword', component: RestPasswordComponent },
  { path: 'forgetpassword', component:ForgetPasswordComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
