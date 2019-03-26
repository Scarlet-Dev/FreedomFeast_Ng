import { MatTableDataSource } from "@angular/material";
import { Component, OnInit, OnChanges, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from "@angular/forms";

import { FeastFreedomApiService } from "../../../../services/feast-freedom-api.service";

export interface MenuData {

}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})


export class MenuItemComponent implements OnInit, OnChanges {


  menu_items: MatTableDataSource<any>
  displayedColumns: string[] = ["Menu Item Name", "Item Type", "Description", "Price", "Actions"]

  constructor(private menu: FeastFreedomApiService, public dialog: MatDialog) {
    this.showEditForm = false
    this.showTable = true
    this.showCreateForm = false
  }

  public showCreateForm: boolean
  public showEditForm: boolean
  public showTable: boolean

  ngOnChanges(onChange) {

  }

  ngOnInit() {
    this.getMenu()
  }

  createMenuItem() {
    this.showCreateForm = true
  }
  cancelCreate() {
    this.showCreateForm = false
  }

  getMenu() {
    return this.menu.getMenuItems(localStorage.getItem("id"))
      .subscribe((list: any) => {

        // console.log(list.length == 0)
        if (list.length == 0) {
          this.showTable
        }
        else {
          this.showTable = false
          this.menu_items = new MatTableDataSource(list)
          // console.log(this.menu_items)
        }
      })
  }

  submitMenuItem(NewMenu: any) {
    // console.log(NewMenu)
    return this.menu.newMenuItem(localStorage.getItem("id"),
      NewMenu.value).subscribe((res) => {
        var newItem = res
        // console.log(res)
        this.ngOnChanges(newItem)
        this.showCreateForm = false
        this.getMenu()
      })
  }


  openUpdateDialog(){
    const updateDialog = this.dialog.open(MenuItemDialogUpdate, {
      width:'250px;',
      data: {}
    })

    updateDialog.afterClosed().subscribe((result) =>{
      this.updateMenuItem(result)
    })
  } 

  updateMenuItem(UpdatedMenu: any) {
      (MenuItemDialogUpdate)
    return this.menu.updateMenuItem(localStorage.getItem('id'),
      UpdatedMenu).subscribe((res) => {
        this.getMenu()
      })

  }



  deleteMenuItem(DeletedMenu) {
    return this.menu.deleteMenuItem(localStorage.getItem("id"),
      DeletedMenu).subscribe((res) => {

      })
  }

}

@Component({
  selector: "menu-item-dialog-update",
  templateUrl: "menu-item-dialog-update.html"
})

export class MenuItemDialogUpdate {

  constructor(public menuDialogRef: MatDialogRef<MenuItemDialogUpdate>,
    @Inject(MAT_DIALOG_DATA) public data: MenuData) { }

  onClickForUpdate(): void {
    this.menuDialogRef.close()
  }
}


@Component({
  selector: "menu-item-dialog-delete",
  templateUrl: "menu-item-dialog-delete.html"
})
export class MenuItemDialogDelete {

  constructor(
    public menuDialogRef: MatDialogRef<MenuItemDialogDelete>,
    @Inject(MAT_DIALOG_DATA) public data: MenuData) { }

  onClickForDelete(): void {
    this.menuDialogRef.close()
  }
}
