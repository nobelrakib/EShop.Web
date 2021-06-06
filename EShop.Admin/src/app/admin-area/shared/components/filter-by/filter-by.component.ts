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
      {"labelText":"Product Code", "inputType":'text',"htmlElement": "input"},
      {"labelText":"Product Name", "inputType":'date', "htmlElement": "input"},
      );
  }

}
