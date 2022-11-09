import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //This import is needed to inject the http request service which will allow us to get the Api and to be used in the
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';
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

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?id=${id}`);
  }

  // getUsers(size: number = 10): Observable<any> {
  //   return this.http
  //     .get<any>(`${this.apiURL}/?results=${size}`)
  //     .pipe(map((response) => this.processResponse(response)));
}

// private processResponse(response: Response): Response {
//     return {
//       info: { ...response.info },
//       results: response.results.map(
//         (user: any) => <User>(<unknown>{
//             id: user.login.uuid,
//             firstName: user.name.first,
//             lastName: user.name.last,
//             email: user.email,
//             userName: user.login.username,
//             gender: user.gender,
//             address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
//             dateOfBirth: user.dob.date,
//             phone: user.phone,
//             imageUrl: user.picture.medium,
//             coordinate: {
//               latitude: +user.location.coordinates.latitude,
//               longitude: +user.location.coordinates.longitude,
//             },
