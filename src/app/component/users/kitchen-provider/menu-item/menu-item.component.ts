import { MatTableDataSource } from "@angular/material";
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from "@angular/forms";

import { FeastFreedomApiService } from "../../../../services/feast-freedom-api.service";

export interface MenuData {
  _id: String,
  name: String,
  type: String,
  description: String,
  price: String
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})


export class MenuItemComponent implements OnInit {

  _id: String;
  name: String;
  type: String;
  description: String;
  price: String;

  menu_items: MatTableDataSource<any>
  displayedColumns: string[] = ["Menu Item Name", "Item Type", "Description", "Price", "Actions"]

  constructor(private menu: FeastFreedomApiService, public dialog: MatDialog) {

    this.showCreateForm = false
  }

  public showCreateForm: boolean
  public showTable: boolean

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
        // var newItem = res
        // console.log(res)
        this.showCreateForm = false
        this.getMenu()
      })
  }


  openUpdateDialog(row_data) {
    const updateDialog = this.dialog.open(MenuItemDialogUpdate, {
      width: 'auto',
      height: 'fit-content',
      data: row_data
    })
    updateDialog.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result)
        this.updateMenuItem(result)
      }
    })
  }
  updateMenuItem(UpdatedMenu: any) {
    return this.menu.updateMenuItem(localStorage.getItem('id'),
      UpdatedMenu).subscribe(() => {
        this.getMenu()
      })

  }



  openDeleteDialog(row_data) {
    const deleteDialog = this.dialog.open(MenuItemDialogDelete, {
      width: '250px',
      height:'',
      data: row_data
    })

    deleteDialog.afterClosed().subscribe((result) => {
      console.log(result)
      this.deleteMenuItem(result)
    })
  }
  deleteMenuItem(DeletedMenu) {
    return this.menu.deleteMenuItem(localStorage.getItem("id"),
      DeletedMenu).subscribe(() => {
        this.getMenu()
      })
  }

}

@Component({
  selector: "menu-item-dialog-update",
  templateUrl: "menu-item-dialog-update.html"
})

export class MenuItemDialogUpdate {

  constructor(public menuDialogRef: MatDialogRef<MenuItemDialogUpdate>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClickForUpdate(): void {
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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClickForDelete(): void {
    this.menuDialogRef.close()
  }
}
