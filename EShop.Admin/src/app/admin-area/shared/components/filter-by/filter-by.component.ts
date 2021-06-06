import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {

  @Input() filterColumns: any[] = [];
  constructor() { }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
  ngOnInit(): void {
    this.filterColumns.push(
      {"labelText":"Product Name", "inputType":'text',"htmlElement": "input"},
      {"labelText":"Mobile number", "inputType":'number', "htmlElement": "input"},
      {"labelText":"Date", "inputType":'date', "htmlElement": "date"},
      {"labelText":"Is it Delivered ?", "inputType":'', "htmlElement": "checkbox"},
      {"labelText":"Date Range", "inputType":'daterange', "htmlElement": "date"},
      );
  }

}
