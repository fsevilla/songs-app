import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class ArtistService {

  constructor(
  	private _http: Http
  ) { }

  private getUrl(method:string, artist:string) {
  	return `${environment.lastFmApi}method=artist.${method}&artist=${artist}&api_key=${environment.apiKey}&format=json`;
  }

  searchArtists(artist:string) {
  	const url = this.getUrl('search', artist);
  	return this._http.get(url)
  		.map(response => {
  			return response.json().results.artistmatches.artist;
  		})
  		.toPromise();
  }

  getTopAlbums(artist:string) {
  	const url = this.getUrl('gettopalbums', artist);
  	return this._http.get(url)
  		.map(response => {
        try{
          return response.json().topalbums.album;
        } catch(e) {
          return {
            error: true,
            errorCode: response.json().error
          }
        }
  		})
  		.toPromise();
  }

}
