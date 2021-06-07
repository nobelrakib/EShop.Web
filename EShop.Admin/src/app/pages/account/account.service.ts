import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { of, ReplaySubject } from 'rxjs';
import { IUser, UserProfile } from '../../shared/models/user';
import { AuthEndpoints } from 'src/app/core/api-endpoints/auth-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSource = new ReplaySubject<UserProfile>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router, private authEndpoint: AuthEndpoints) { }

  login(values: any) {
    return this.http.post<IUser>(this.authEndpoint.login, values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('userProfile', JSON.stringify(user.userProfile));

          this.currentUserSource.next(user.userProfile);
        }
      })
    )
  }

  setCurrentUser(user: UserProfile) {
    if (user != null) {
      this.currentUserSource.next(user);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/account/login');
  }

}
