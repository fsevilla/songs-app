import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ng-bootstrap/dropdown';

import { AppComponent } from './app.component';

import { ArtistsComponent } from './artists/artists.component';
import { SongDetailsComponent } from './songs/song-details/song-details.component';
import { ArtistService } from './artists/artist.service';
import { AlbumsComponent } from './artists/albums/albums.component';
import { routing } from './app.routing';
import { AlbumDetailsComponent } from './artists/albums/album-details/album-details.component';
import { AlbumService } from './artists/albums/album.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    SongDetailsComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BsDropdownModule.forRoot()
  ],
  providers: [
    ArtistService,
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
