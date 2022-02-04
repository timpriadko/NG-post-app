import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<Post[]> {
    let params = new HttpParams();
    params = params.append('_limit', '8');

    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/Posts', {
        params,
      })
      .pipe(
        shareReplay(),
        catchError((error) => {
          console.log('Error', error.message);
          return throwError(error);
        })
      );
  }

  removePost(id: number): Observable<any> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getPostById(id: number) {
    return this.http
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(
        shareReplay(),
        catchError((error) => {
          console.log('Error', error.message);
          return throwError(error);
        })
      );
  }
}
