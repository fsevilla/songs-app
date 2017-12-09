import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { environment } from './../../environments/environment';

@Injectable()
export class SongService {
  
  constructor(
  	private _http: Http
  ) { }

  getSongs() {
  	let url = environment.apiUrl + 'albums';
  	return this._http.get(url)
  		.map(response => response.json())
  		.toPromise();
  }

}
