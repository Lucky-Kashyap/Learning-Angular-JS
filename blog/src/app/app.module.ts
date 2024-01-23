import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [
    // AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    ServicesComponent,
    HousingLocationComponent,
    CommentListComponent,
  ],
  imports: [BrowserModule, DetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module constructore loaded...!!!');
  }
}
