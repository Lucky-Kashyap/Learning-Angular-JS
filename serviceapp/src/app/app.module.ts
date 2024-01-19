import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistnamesComponent } from './artistnames/artistnames.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistnamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
