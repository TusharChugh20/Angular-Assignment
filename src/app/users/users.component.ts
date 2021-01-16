import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  userslist: User[] = [
    {
      name: 'Tushar Chugh',
      username: 'tusharchugh07',
      email: 'tushar.chugh@nagarro.com',
    },
    {
      name: 'Rahul Jain',
      username: 'rahulj1',
      email: 'rahuljain1998@gmail.com',
    },
    {
      name: 'Shekhar Bhardwaj',
      username: 'sbh7435',
      email: 'sbh7435@gmail.com',
    },
  ];

  constructor() {
    for(let u of this.userslist){
      this.users.push(u)
    }
  }

  ngOnInit(): void {}
}
