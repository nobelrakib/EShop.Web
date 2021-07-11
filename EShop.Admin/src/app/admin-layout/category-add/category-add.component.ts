import { ICategory } from './../../shared/Models/category';
import { ToastrService } from 'ngx-toastr';

import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenLoadingFunction, MenuItemSelectedEvent, Ng2TreeSettings, NodeEvent, NodeMenuItemAction, RenamableNode, TreeModel } from 'ng2-tree';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {


  categories: ICategory[] = [];
  form: FormGroup;

  public categoryModel: TreeModel = {
    value: 'Category Tree',
    id: 0,
    settings: {
      isCollapsedOnInit: true
    },
    children: [],
    loadChildren: (callback) => {
      this.getAllCategories(callback);
    }
  }

  constructor(private formBuilder: FormBuilder, private toasterService: ToastrService,
    private categoryService: CategoryService) { }

  public settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true
  };

  public disabledCheckboxesSettings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true,
    enableCheckboxes: false
  };

  @ViewChild('treeFonts') public treeFonts;

  private static logEvent(e: NodeEvent, message: string): void {
    console.log(e);
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      parentCategoryId: ['', Validators.required]
    })
  }

  submit() {
    this.categoryService.addCategory(this.form.value).subscribe(res => {
      this.toasterService.success("category successfully added");
    })
  }

  getAllCategories(callback) {
    this.categoryService.getCategories().toPromise().then((result) => {
      this.categories = result.data;
      let treeModels: TreeModel[] = [];

      this.categories.map(x => {
        treeModels.push({
          id: x.id,
          value: x.name,
          children: this.getSubCategories(x.subCategories)
        });
      });
      callback(treeModels);
    })

  }

  getSubCategories(subCategories: ICategory[]) {
    let subCategoriesTreeModels: TreeModel[] = [];

    subCategories.map(subCategory => {
      subCategoriesTreeModels.push({
        id: subCategory.id,
        value: subCategory.name,
        children: this.getSubCategories(subCategory.subCategories)
      });
    });
    return subCategoriesTreeModels;
  }

  public onNodeSelected(e: NodeEvent): void {
    this.form.get('parentCategoryId').setValue(e.node.id);
  }

  public onNodeRemoved(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Removed');
  }

  public onNodeMoved(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Moved');
  }

  public onNodeRenamed(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Renamed');
  }

  public onNodeCreated(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Created');
  }

  public onNodeUnselected(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Unselected');
  }

  public onMenuItemSelected(e: MenuItemSelectedEvent) {
    CategoryAddComponent.logEvent(e, `You selected ${e.selectedItem} menu item`);
  }

  public onNodeExpanded(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Expanded');
  }

  public onNodeCollapsed(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Collapsed');
  }


}


