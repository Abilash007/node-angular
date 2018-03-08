import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router'
import {SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'
import {DataService} from './data.service';
import {ProtectGuard} from './protect.guard';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component'

const appRoutes:Routes=[
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[ProtectGuard]},
  {path:'logout',component:LogoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,ProtectGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
