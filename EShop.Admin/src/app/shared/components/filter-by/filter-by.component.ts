import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IFilterBySetting } from './../../models/IFilterBySetting';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HtmlElementEnum } from '../../enums/filterBySetting-enum';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss']
})
export class FilterByComponent implements OnInit {

  @Input() filterByColumnSettings: IFilterBySetting[] = [];
  filterByForm: FormGroup;
  searchText: string;
  @Output() searchTextCallBackFn: EventEmitter<string> = new EventEmitter<string>() || null;
  @Output() filterByCallBackValue: EventEmitter<any> = new EventEmitter<any>() || null;

  constructor() {
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
  ngOnInit(): void {
    this.selectAllForMultiSelectDropdown();
    this.buildForm();
  }

  getSearchText(){
    this.searchTextCallBackFn.emit(this.searchText);
  }

  onSubmit() {
    // console.log(this.filterByForm.value);
    this.filterByCallBackValue.emit(this.filterByForm.value);
  }

  buildForm() {
    let group = {};
    this.filterByColumnSettings.forEach(column => {
      group[column.labelText] = new FormControl('', []);
    });

    this.filterByForm = new FormGroup(group);
  }

  selectAllForMultiSelectDropdown() {
    this.filterByColumnSettings.map(element => {
      if (element.dropDownItems && element.htmlElement === HtmlElementEnum.MultiSelectDropdown) {
        element.dropDownItems.map(item => { item["selectAllGroup"] = "Select All"; });
      }
    });
  }


}
