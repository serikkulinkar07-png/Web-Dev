import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private albumsCache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {

    if (this.albumsCache) {
      return of(this.albumsCache);
    }

    return this.http.get<any[]>(`${this.baseUrl}/albums`).pipe(
      tap((data) => (this.albumsCache = data))
    );
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/albums/${id}`);
  }

  updateAlbum(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/albums/${id}`, body);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  clearAlbumsCache() {
    this.albumsCache = null;
  }
}
