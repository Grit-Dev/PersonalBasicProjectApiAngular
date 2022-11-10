import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/interface/info.interface';
import { User } from 'src/app/interface/user.interface';
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
  responseID: Response| any;

  //Constructor:
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getUserById();
  }

  createUser(){
    
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
        this.info = {...results.info} as unknown as Info;

        //Trying my on logic to check if I fully understand this - Merely testing
        
        //Might only need to do this.responsClass = response;

      },
      error: () => {
      console.log('Response did not happen');
      }
    });
  }
}
