import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';

import { SongService } from './songs/song.service';
import { ArtistsComponent } from './artists/artists.component';
import { SongDetailsComponent } from './songs/song-details/song-details.component';
import { ArtistService } from './artists/artist.service';
import { AlbumsComponent } from './artists/albums/albums.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ArtistsComponent,
    SongDetailsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    SongService,
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
