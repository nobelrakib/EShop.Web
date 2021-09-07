import { ICategory } from './../../shared/Models/category';
import { ToastrService } from 'ngx-toastr';

import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  ChildrenLoadingFunction, MenuItemSelectedEvent,
  Ng2TreeSettings, NodeEvent, NodeExpandedEvent, NodeMenuItemAction, NodeSelectedEvent,
  RenamableNode, Tree, TreeModel
} from 'ng2-tree';
import { CategoryService } from '../services/category.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit, AfterViewInit {


  categories: ICategory[] = [];
  form: FormGroup;
  flag: boolean = true;
  public categoryModel: TreeModel = {
    value: 'Root category',
    id: 1,
    settings: {
      'static': true,
      'isCollapsedOnInit': false,
      'rightMenu': true,
      'leftMenu': true,
      'cssClasses': {
        'expanded': 'fa fa-caret-down fa-lg',
        'collapsed': 'fa fa-caret-right fa-lg',
        'leaf': 'fa fa-lg',
        'empty': 'fa fa-caret-right disabled'
      },
    },
    children: [],

    // loadChildren: (callback) => {
    //   this.getAllCategories(callback);

    // }
  }

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private toasterService: ToastrService,
    private categoryService: CategoryService, private location: Location) { }

  public settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true,

  };

  public disabledCheckboxesSettings: Ng2TreeSettings = {
    rootIsVisible: true,
    showCheckboxes: false,
    enableCheckboxes: false,

  };

  @ViewChild('treeFonts') public treeFonts;

  private static logEvent(e: NodeEvent, message: string): void {
    console.log(e);
  }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      description: [''],
      parentCategoryId: ['', Validators.required]
    })
    this.getAllCategories()
    const categoryid = parseInt(this.route.snapshot.paramMap.get('id1'));
    const categoryParentId = parseInt(this.route.snapshot.paramMap.get('id2'))
    //debugger;
    if (categoryid && categoryParentId) {
      this.categoryService.getCategoriesById(categoryid).subscribe(data => {
        //console.log("this is category " + data.name)
        this.form.get('id').setValue(data.id);
        this.form.get('name').setValue(data.name);
        this.form.get('description').setValue(data.description);
        this.form.get('parentCategoryId').setValue(data.parentCategoryId);

      })
    }


  }

  ngAfterViewInit(): void {
    console.log("hi  " + this.categoryModel)

    // oopNodeController.select();
  }

  ngAfterViewChecked(): void {
    // const oopNodeController = this.treeFonts.getControllerByNodeId(0);
    const categoryid = parseInt(this.route.snapshot.paramMap.get('id1'));
    const categoryParentId = parseInt(this.route.snapshot.paramMap.get('id2'))
    // console.log(categoryid, categoryParentId)
    if (this.categoryModel.children.length > 0 && categoryid && categoryParentId && this.flag) {
      const oopNodeController = this.treeFonts.getControllerByNodeId(categoryParentId);
      oopNodeController.select();
      this.flag = false;




    }

    //console.log(oopNodeController);
    // console.log(this.categoryModel)
  }


  submit() {
    this.categoryService.addCategory(this.form.value).subscribe(res => {
      this.toasterService.success("category successfully added");
      this.location.back();
    })
  }



  getAllCategories() {
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
      this.categoryModel.children = treeModels;
      console.log(this.categoryModel)
      //  callback(treeModels);
    })
  }

  getSubCategories(subCategories: ICategory[]) {
    let subCategoriesTreeModels: TreeModel[] = [];

    subCategories.map(subCategory => {
      subCategoriesTreeModels.push({
        id: subCategory.id,
        value: subCategory.name,
        children: this.getSubCategories(subCategory.subCategories),
      });
    });
    return subCategoriesTreeModels;
  }

  public onNodeSelected(e: NodeEvent): void {
    this.form.get('parentCategoryId').setValue(e.node.id);
    console.log(this.form.value);

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
    console.log(e)

  }

  public onNodeCollapsed(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Collapsed');
  }


}


