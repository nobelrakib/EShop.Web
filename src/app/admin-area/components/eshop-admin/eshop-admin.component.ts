import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import * as feather from 'feather-icons';
import { LayoutService } from '../../shared/services/layout.service';
import { NavService } from '../../shared/services/nav.service';

@Component({
  selector: 'app-eshop-admin',
  templateUrl: './eshop-admin.component.html',
  styleUrls: ['./eshop-admin.component.scss'],
})

export class EShopAdminComponent implements OnInit, AfterViewInit  {

  constructor(public navServices: NavService, 
    public layout: LayoutService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  
  ngOnInit() {
    
  }
}
