import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';

import { SongService } from './songs/song.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
