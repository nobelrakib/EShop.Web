import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  rows = [];
  lastIndex = 15;

  ColumnMode = ColumnMode;


  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      this.rows = result.data;

      this.rows = this.rows.map(d => {
        d.treeStatus = 'collapsed';
        d.parentId = null;
        return d;
      });
    })
  }

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'loading';
      let data = row.subCategories.map(d => {
        d.treeStatus = 'collapsed';
        d.parentId = row.id;
        return d;
      });
      row.treeStatus = 'expanded';
      this.rows = [...this.rows, ...data];
    }
    else {
      row.treeStatus = 'collapsed';
      let categoryIds = [];
      let findChildCategoryIds = (category) => {

        if (!!category.subCategories) {
          category.subCategories.forEach(sc => {
            categoryIds.push(sc.id);
            findChildCategoryIds(sc);
          });
        }
      }
      console.log("category ids ", categoryIds);
      findChildCategoryIds(row);
      let rowsCopy = [...this.rows]

      this.rows.forEach(x => {
        let elm = categoryIds.includes(x.id);
        if (elm) {
          let index = rowsCopy.indexOf(x);
          rowsCopy.splice(index, 1);
        }
      })

      this.rows = [...rowsCopy];
      console.log(this.rows)
    }
  }
}
