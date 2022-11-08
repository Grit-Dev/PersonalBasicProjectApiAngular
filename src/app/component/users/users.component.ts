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
  user: User[] = [];
  info: Info | any;
  responseClass: Response | any;

  //Constructor:
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers(10).subscribe({
      next: (response: any) => {

        this.user = response.results;
        this.info = response.info;

        //Trying my on logic to check if I fully understand this - Merely testing
        this.responseClass.info = response.info;
        this.responseClass.results = response.results;
        
        //Might only need to do this.responsClass = response;

      },
      error: () => {
      console.log('Response did not happen');
      }
    });
  }
}
