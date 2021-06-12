import { IFilterBySetting } from './../../models/IFilterBySetting';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {
  
  @Input() filterByColumnSettings: IFilterBySetting[] = [];
  constructor() { }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
  ngOnInit(): void {

  }

}
