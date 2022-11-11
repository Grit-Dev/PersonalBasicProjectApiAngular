import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; //This import is needed to inject the http request service which will allow us to get the Api and to be used in the
import { map, Observable } from 'rxjs';
import { User } from '../interface/user.interface';
import { Response } from '../interface/response.interface';
import { UserTypicode } from '../interface/userTypicode.interface';
//user details modules.

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //fields

  private readonly apiUrl = 'https://randomuser.me/api/?results=10';

  //Testing a different API
  private readonly testingApiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  //
  ///Delete User
  //

  deleteUser(id: number): Observable<unknown> {
    
    return this.http.delete<unknown>(
      
      //APIURL changes as this one contains a list. For testing purposes only. 
      
      `${this.apiUrl}/users/${id}`    
      );
  }

  //
  ///
  //

  //Update user:
  //When updating user, you have to send the entire data or else all data will be sent to the default data
  //

  updateUser(user: UserTypicode): Observable<UserTypicode> {
    //NOTE: depending on the api documentation. There is specfic ways of updating the api. in this case it requires the id
    //of the field to be sent across:
    return this.http.put<UserTypicode>(
      `${this.testingApiUrl}/${user.id}`,
      user
    );
  }

  //
  //// When updating user, you have to send the entire data or else all data will be sent to the default data
  //

  //Create user:

  //Post is used here to send our object to the api and an user to be added.
  //At the end of the url we have a user object being passed to be sent across

  //Observable: Think of this as a async request:
  createUser(user: UserTypicode): Observable<UserTypicode> {
    return this.http.post<UserTypicode>(`${this.testingApiUrl}`, user);
  }

  //
  ////
  //

  //This get my api for the users
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`);
  }

  //Test Try two:

  getUserById(id: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/?id=${id}`)
      .pipe(map((response) => this.processResponseUser(response)));
  }

  // getUsers(size: number = 10): Observable<any> {
  //   return this.http
  //     .get<any>(`${this.apiURL}/?results=${size}`)
  //     .pipe(map((response) => this.processResponse(response)));

  private processResponseUser(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map(
        (user: any) => <User>(<unknown>{
            id: user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            userName: user.login.username,
            gender: user.gender,
            address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
            dateOfBirth: user.dob.date,
            phone: user.phone,
            imageUrl: user.picture.medium,
            coordinate: {
              latitude: +user.location.coordinates.latitude,
              longitude: +user.location.coordinates.longitude,
            },
          })
      ),
    };
  }
}
