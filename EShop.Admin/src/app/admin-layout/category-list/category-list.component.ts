import { AppPermissions } from './../../shared/Constants/app-permissions';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/Components/alert/alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public permissionNames = AppPermissions;
  rows = [];
  lastIndex = 15;
  ColumnMode = ColumnMode;


  constructor(private categoryService: CategoryService, private router: Router,
    private alertService: AlertService, private toastrService: ToastrService) {
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

  editCategory(row: any) {
    console.log(row);
    this.router.navigate(['/admin/category-edit', row.id, row.parentCategoryId]);
  }

  removeCategory(id: number) {
    this.alertService.confirm().then((confirmed) => {
      if (confirmed) {
        this.categoryService.deleteCategory(id).subscribe(() => {
          this.toastrService.success('Deleted Successfully');
          this.getCategories();
        })
      }
    });
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
