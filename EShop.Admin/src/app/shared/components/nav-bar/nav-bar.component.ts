import { AccountService } from './../../../admin-layout/account/account.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.accountService.logout();
  }

}
