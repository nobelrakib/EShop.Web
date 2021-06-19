import { ICategory, ICategoryWithPaginationInfo } from './../../../shared/models/category';
import { CategoryService } from './../../services/category.service';
import { Data } from './../../../shared/models/data';
import { ControlValueAccessor } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItemSelectedEvent, Ng2TreeSettings, NodeEvent, NodeMenuItemAction, RenamableNode, TreeModel } from 'ng2-tree';

export interface Item {
  id: string,
  name: string,
  capital: string,
  phone: string,
  currency: string
}

export interface DownLineItem {
  item: Item,
  parent: DownLineItem
}

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  categories: ICategory[] = [];

  public categoryModel: TreeModel = {
    value: 'Fonts',

    settings: {
      isCollapsedOnInit: true
    },
    children: [],
    loadChildren: (callback) => {
      this.categoryService.getCategories().toPromise().then((result) => {
        this.categories = result.data;
        let treeModels: TreeModel[] = [];
        let treeModel: TreeModel = { value: '', children: [] }

        let getSubCategoriesFromCategory = (categories: ICategory[], treeModel: TreeModel) => {
          categories.map(category => {
            if (category.parentCategoryId == 0) {
              if (!!treeModel.id) {
                treeModel = { value: category.name, id: category.id, children: [] }
                treeModels.push(treeModel)
              }
              else {
                treeModel.value = category.name;
                treeModel.id = category.id;
                treeModels.push(treeModel)
              }
            }

            if (!!category.subCategories && !!category.subCategories.length) {
              category.subCategories.forEach(subCategory => {

                let childTreeModel: TreeModel = { value: '' };
                if (!!treeModel && (treeModel.id === subCategory.parentCategoryId)) {
                  childTreeModel.id = subCategory.id;
                  childTreeModel.value = subCategory.name;
                  childTreeModel.children = [];
                  treeModel.children.push(childTreeModel);
                }
                getSubCategoriesFromCategory(category.subCategories, childTreeModel);//level 2

              })
            }
          });
        }
        getSubCategoriesFromCategory(this.categories, treeModel);//data
        callback(treeModels);
      })
    }
  }



  constructor(private categoryService: CategoryService) { }

  public settings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true
  };

  public disabledCheckboxesSettings: Ng2TreeSettings = {
    rootIsVisible: false,
    showCheckboxes: true,
    enableCheckboxes: false
  };

  public fonts: TreeModel = {
    value: 'Fonts',

    settings: {
      isCollapsedOnInit: true
    },
    children: [
      {
        value: 'Serif  -  All my children and I are STATIC ¯\\_(ツ)_/¯',
        id: 1,
        settings: {
          static: true
        },
        children: [
          { value: '<a href="#" id="antiqua" class="test">Antiqua</a> with HTML tags.', id: 2 },
          { value: 'DejaVu Serif', id: 3 },
          { value: 'Garamond', id: 4 },
          { value: 'Georgia', id: 5 },
          { value: 'Times New Roman', id: 6 },
          {
            value: 'Slab serif',
            id: 7,
            children: [{ value: 'Candida', id: 8 }, { value: 'Swift', id: 9 }, { value: 'Guardian Egyptian', id: 10 }]
          }
        ]
      },
      {
        value: 'Sans-serif (Right click me - I have a custom menu)',
        id: 11,
        settings: {
          menuItems: [
            { action: NodeMenuItemAction.Custom, name: 'Foo', cssClass: 'fa fa-arrow-right' },
            { action: NodeMenuItemAction.Custom, name: 'Bar', cssClass: 'fa fa-arrow-right' },
            { action: NodeMenuItemAction.Custom, name: 'Baz', cssClass: 'fa fa-arrow-right' }
          ]
        },
        children: [
          { value: 'Arial', id: 12 },
          { value: 'Century Gothic', id: 13 },
          { value: 'DejaVu Sans', id: 14 },
          { value: 'Futura', id: 15 },
          { value: 'Geneva', id: 16 },
          { value: 'Liberation Sans', id: 17 }
        ]
      },
      {
        value: 'Monospace - With ASYNC CHILDREN',
        id: 18,
        // children property is ignored if "loadChildren" is present
        children: [{ value: 'I am the font that will be ignored' }],
        loadChildren: callback => {
          setTimeout(() => {
            callback([
              { value: 'Input Mono', id: 19 },
              { value: 'Roboto Mono', id: 20 },
              { value: 'Liberation Mono', id: 21 },
              { value: 'Hack', id: 22 },
              { value: 'Consolas', id: 23 },
              { value: 'Menlo', id: 24 },
              { value: 'Source Code Pro', id: 25 }
            ]);
          }, 5000);
        }
      }
    ]
  };

  @ViewChild('treeFonts') public treeFonts;


  private static logEvent(e: NodeEvent, message: string): void {
    console.log(e);
  }



  public ngOnInit(): void {

  }

  public initilizeTreeModel(): void {

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



  public onNodeSelected(e: NodeEvent): void {
    CategoryAddComponent.logEvent(e, 'Selected');
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
