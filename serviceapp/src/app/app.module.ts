import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistnameComponent } from './artistnames/artistnames.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [AppComponent, ArtistsComponent, ArtistnameComponent],
  imports: [BrowserModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
