import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/services/models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/user/user.service';

@Component({
  selector: 'iam-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private authService:  AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.authService.emitUser();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }
}
