import { Component, OnInit } from '@angular/core';

import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public songName: string;
  public songs:Array<string> = [];

  constructor(private _songService: SongService) { }

  ngOnInit() {
  	this.getSongs();
  }

  addSong() {
  	this.songs.push(this.songName);
  	this.songName = '';
  }

  getSongs() {
  	this.songs = [
  		'cancion 1',
  		'cancion 2',
  		'cancion 3'
  	];
  }

}
