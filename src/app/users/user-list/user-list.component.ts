import { Component, OnInit } from '@angular/core'
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  users: User[];

  constructor(private service: UserService) {
    this.users = service.users;
  }

  ngOnInit(): void {
   
  }
}