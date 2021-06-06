import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eshop-admin',
  templateUrl: './eshop-admin.component.html',
  styleUrls: ['./eshop-admin.component.scss'],
})

export class EShopAdminComponent implements OnInit  {
  show: boolean = true;
  
  constructor(){
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
  ngOnInit(): void {
  }
}
