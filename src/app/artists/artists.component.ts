import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  public artistName:string;
  public artistsList:Array<any>;
  constructor(private _artistService: ArtistService) { }

  ngOnInit() {
  }

  searchArtists() {
  	console.log('Buscar artista', this.artistName);
  	this._artistService.searchArtists(this.artistName)
  		.then(response => {
  			this.artistsList = response;
  		})
  		.catch(err => {
  			console.log('Error: ', err);
  		});
  }
}
