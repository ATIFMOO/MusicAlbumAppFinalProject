import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums = [];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.musicService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }
}
