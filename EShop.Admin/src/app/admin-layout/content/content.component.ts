import { Component, OnInit, AfterViewInit, Injectable } from '@angular/core';
import * as feather from 'feather-icons';
import { NavService } from 'src/app/shared/services/nav.service';
import { LayoutService } from 'src/app/shared/services/layout.service';

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
