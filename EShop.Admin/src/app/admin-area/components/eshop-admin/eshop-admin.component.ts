import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import * as feather from 'feather-icons';
import { LayoutService } from '../../shared/services/layout.service';
import { NavService } from '../../shared/services/nav.service';

@Component({
  selector: 'app-eshop-admin',
  templateUrl: './eshop-admin.component.html',
  styleUrls: ['./eshop-admin.component.scss'],
})

export class EShopAdminComponent implements OnInit  {

  ngOnInit(): void {
  }
}
