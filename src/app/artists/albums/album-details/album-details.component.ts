import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  public album:any;
  public artistName: string;
  constructor(
  	private _route: ActivatedRoute,
    private _albumService: AlbumService
  ) { }

  ngOnInit() {
  	this._route.params.subscribe(params => {
      this.artistName = params.artistName;
      this.getInfo(params.artistName, params.album);
  	});
  }

  getInfo(artist:string, album:string) {
    console.log('obtener datos del album...');
    this._albumService.getDetails(artist, album)
      .then(response => {
        console.log('Response: ', response);
        this.album = response;
      })
      .catch(err => {
        console.log('Error: ', err);
      });
  }

}
