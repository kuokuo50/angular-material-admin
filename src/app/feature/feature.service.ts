import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

export interface Feature {
  path: string;
  icon: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private apiUrl = 'assets/api/features/features.json';

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getFeature(path: string): Observable<Feature | undefined> {
    return this.getFeatures()
      .pipe(
        map((featurets: Feature[]) => featurets.find(p => p.path === path))
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
