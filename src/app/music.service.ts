import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get(`${this.uri}/albums`);
  }

  getAlbumById(id) {
    return this.http.get(`${this.uri}/albums/${id}`);
  }

  addAlbum(album) {
    return this.http.post(`${this.uri}/albums`, album);
  }

  updateAlbum(id, album) {
    return this.http.put(`${this.uri}/albums/${id}`, album);
  }

  deleteAlbum(id) {
    return this.http.delete(`${this.uri}/albums/${id}`);
  }
}
