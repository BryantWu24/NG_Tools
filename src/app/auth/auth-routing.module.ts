import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { NbLoginComponent, NbRegisterComponent, NbLogoutComponent, NbRequestPasswordComponent, NbResetPasswordComponent } from '@nebular/auth';
import { LoginPageComponent } from './login/login.component';


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      component: LoginPageComponent,
    },
    {
      path: 'login1',
      component: NbLoginComponent
    },
    {
      path: 'register',
      component: NbRegisterComponent,
    },
    {
      path: 'logout',
      component: NbLogoutComponent,
    },
    {
      path: 'request-password',
      component: NbRequestPasswordComponent,
    },
    {
      path: 'reset-password',
      component: NbResetPasswordComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
