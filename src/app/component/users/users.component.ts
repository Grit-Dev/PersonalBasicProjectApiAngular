import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interface/info.interface';
import { User } from 'src/app/interface/user.interface';
import { UserTypicode } from 'src/app/interface/userTypicode.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  //felds:
  response: Response | any;
  info: Info | any;
  userById: User | any;
  responseID: Response | any;

  //
  //My post object:
  //

  private userPostApiObj: UserTypicode = {
    id: 100,
    name: 'Paul Blackthorne',
    username: 'hatamoto',
    email: 'paulsan@testeremail.com',
    address: {
      street: 'Toranaga',
      suite: 'Yeamon',

      city: 'Osaka',
      zipcode: '32432432wefdwefew',
      geo: {
        lat: '324423423434324',
        lng: '4645646456456456',
      },
    },
    phone: '345345435345345',
    website: 'www.shogun.com',
    company: {
      name: 'Taranaga-sama-minawara',
      catchPhrase: 'marikosan',
      bs: '2000 ki',
    },
  };

  //Updating user within the API: 
    private userUpdateApiObj: UserTypicode = {

    id: 5,
    name: 'Paul Blackthorne',
    username: 'hatamoto',
    email: 'paulsan@testeremail.com',
    address: {
      street: 'Miyamoto Musashi',
      suite: 'Yeamon',

      city: 'Kyoto',
      zipcode: '32432432wefdwefew',
      geo: {
        lat: '324423423434324',
        lng: '4645646456456456',
      },
    },
    phone: '345345435345345',
    website: 'www.shogunate.com',
    company: {
      name: 'Taranaga-sama-minawara',
      catchPhrase: 'marikosan & anjin-san',
      bs: '5000 ki',
    },
  };

  //
  // My Post Object
  //

  //Constructor:
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getUserById();

    //Working!
    this.onDeleteUser();
    this.onCreateUser();
  }

  
  //
  /// Delete user
  //

    onDeleteUser(): void {
    this.userService.deleteUser(5).subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: () => {
        console.log('Delete request did not work');
      },
    });
  }

  //
  //
  //

  onUpdateUser(): void {
    this.userService.updateUser(this.userUpdateApiObj).subscribe({
      next: (result: any) => {
        console.table(this.response);
      },
      error: () => {
        console.log('Post request did not work');
      },
    });
  }

  //
  //
  //

  onCreateUser(): void {
    this.userService.createUser(this.userPostApiObj).subscribe({
      next: (result: any) => {
        console.table(this.response);
      },
      error: () => {
        console.log('Post request did not work');
      },
    });
  }

  getUserById() {
    this.userService
      .getUserById('e61141a0-4ff1-44d5-8093-e903b61d9aca')
      .subscribe({
        next: (results: any) => {
          this.responseID = results as unknown as User;

          //Trying my on logic to check if I fully understand this - Merely testing

          //Might only need to do this.responsClass = response;
        },
        error: () => {
          console.log('Response did not happen, not Id Found');
        },
      });
  }

  getUsers() {
    this.userService.getUsers(10).subscribe({
      next: (results: any) => {
        this.response = results as unknown as Response;
        this.info = { ...results.info } as unknown as Info;

        //Trying my on logic to check if I fully understand this - Merely testing

        //Might only need to do this.responsClass = response;
      },
      error: () => {
        console.log('Response did not happen');
      },
    });
  }
}
