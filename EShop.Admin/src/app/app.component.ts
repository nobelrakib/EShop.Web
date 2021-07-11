import { IUser, UserProfile } from './shared/models/user';
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { AccountService } from './admin-layout/account/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: any;
  constructor(private accountService: AccountService) {

  }
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user = JSON.parse(localStorage.getItem('userProfile'));
    if (user) {
      this.accountService.setCurrentUser(user as UserProfile);
      console.log(user)
    }
  }

}
