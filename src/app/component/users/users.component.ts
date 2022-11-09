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

  //Constructor:
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
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
