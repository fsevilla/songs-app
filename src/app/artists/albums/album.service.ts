import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class AlbumService {

  constructor(private _http: Http) { }

  getDetails(artist:string, album:string) {
  	let url = `${environment.lastFmApi}method=album.getinfo&api_key=${environment.apiKey}&artist=${artist}&album=${album}&format=json`;
  	return this._http.get(url)
  		.map(response => {
  			return response.json().album;
  		})
  		.toPromise();

  }

}
