import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import * as feather from 'feather-icons';
import { LayoutService } from '../../shared/services/layout.service';
import { NavService } from '../../shared/services/nav.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

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
