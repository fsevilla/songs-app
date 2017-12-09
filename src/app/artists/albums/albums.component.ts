import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../artist.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public artistName:string = 'Cher';
  public albumsList:Array<any> = [];

  constructor(private _artistService: ArtistService) { }

  ngOnInit() {
  	this.getAlbums();
  }

  getAlbums() {
  	this._artistService.getTopAlbums(this.artistName)
  		.then(response => {
  			this.albumsList = response;
  		})
  		.catch(err => {
  			console.log('Error: ', err);
  		});
  }

}
