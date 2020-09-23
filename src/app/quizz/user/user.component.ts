import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'iam-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService:  UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getAllUser();
  }
}
