import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  performGet(URL: string, params: HttpParams = null): Observable<Response> {
    // Perform our GET request
    return this.http.get(URL, {params}).pipe(
      map((response: Response) => {
        // Request was a success, return response object
        return response;
      }),
      catchError((error: Response) => {
        // Request was unsuccessful, return error
        return throwError('An error occurred');
      })
    );
  }
}
