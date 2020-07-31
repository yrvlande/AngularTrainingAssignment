import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverLoginURL = 'http://localhost:8095/loginValid';
  failureMessage: string;

  constructor(private http: HttpClient) { }

  isValidUser(userID: string, userPassword: string ): Observable<any> {
      return this.http.get(this.serverLoginURL + '/?userID=' + userID + '&userPassword=' + userPassword + '');

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed : ${error.message}`)
        return of(result as T);
    };
}

private log(message: string): void {
  this.failureMessage = 'http call failed';
}

}
