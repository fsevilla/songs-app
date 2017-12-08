import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SongService {
  
  constructor(
  	private _http: Http
  ) { }

  getSongs() {
  	let url = 'https://jsonplaceholder.typicode.com/albums';
  	return this._http.get(url)
  		.map(response => response.json())
  		.toPromise();
  }

}
