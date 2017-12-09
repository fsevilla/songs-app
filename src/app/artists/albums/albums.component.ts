import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public artistName:string = 'Cher';
  public albumsList:Array<any> = [];

  constructor(
    private _artistService: ArtistService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.artistName = params.name;
      this.getAlbums(params.name);
    });
  }

  getAlbums(artistName:string) {
  	this._artistService.getTopAlbums(artistName)
  		.then(response => {
  			this.albumsList = response;
  		})
  		.catch(err => {
  			console.log('Error: ', err);
  		});
  }

}
