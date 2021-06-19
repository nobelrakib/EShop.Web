import { CategoryService } from './../../services/category.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  rows = [];
  lastIndex = 15;

  ColumnMode = ColumnMode;

  // constructor(private cd: ChangeDetectorRef) {
  //   this.fetch(data => {
  //     data = data.slice(1, this.lastIndex);
  //     this.rows = data.map(d => {
  //       d.treeStatus = 'collapsed';
  //       d.parentId = null;
  //       return d;
  //     });
  //   });
  // }
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/data/100k.json`);

  //   req.onload = () => {
  //     setTimeout(() => {
  //       cb(JSON.parse(req.response));
  //     }, 500);
  //   };

  //   req.send();
  // }

  // onTreeAction(event: any) {
  //   const index = event.rowIndex;
  //   const row = event.row;
  //   if (row.treeStatus === 'collapsed') {
  //     row.treeStatus = 'loading';
  //     this.fetch(data => {
  //       data = data.slice(this.lastIndex, this.lastIndex + 3).map(d => {
  //         d.treeStatus = 'collapsed';
  //         d.parentId = row.id;
  //         return d;
  //       });
  //       this.lastIndex = this.lastIndex + 3;
  //       row.treeStatus = 'expanded';
  //       this.rows = [...this.rows, ...data];
  //       this.cd.detectChanges();
  //     });
  //   } else {
  //     row.treeStatus = 'collapsed';
  //     this.rows = [...this.rows];
  //     this.cd.detectChanges();
  //   }
  // }

  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
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
    } else {
      row.treeStatus = 'collapsed';
      this.rows = [...this.rows];
    }
  }
}
