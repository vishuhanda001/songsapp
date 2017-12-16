import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {routes} from './app.router';
import {SongsService} from './shared/songs.service';

import { AppComponent } from './app.component';
import { SongslistComponent } from './songslist/songslist.component';

@NgModule({
  declarations: [
    AppComponent,
    SongslistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    routes
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
