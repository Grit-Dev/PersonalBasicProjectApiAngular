import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //This import is needed to inject the http request service which will allow us to get the Api and to be used in the 
import { Observable } from 'rxjs';
//user details modules. 


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //fields

  private readonly apiUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) {}

  //This get my api for the users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`);
  }

  // getUsers(size: number = 10): Observable<any> {
  //   return this.http
  //     .get<any>(`${this.apiURL}/?results=${size}`)
  //     .pipe(map((response) => this.processResponse(response)));
}
