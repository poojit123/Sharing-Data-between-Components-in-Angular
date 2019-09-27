import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError,BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  ServerUrl = 'https://jsonplaceholder.typicode.com/posts/';
  errorData: {};

  private search = new BehaviorSubject<any>('1');
  currentSearch = this.search.asObservable();

  constructor(private http: HttpClient) { }

  getPostDetails(id) {
    return this.http.get<any>(`${this.ServerUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  changeSearch(search:string){
    this.search.next(search);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
