import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLayoutModule } from '../../material-layout/material-layout.module';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,

  ],
  imports: [
    CommonModule,
    MaterialLayoutModule
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule {
  showNav
  ngOnInit() {
    var showNav = false
  }
  openSideNav() {
    this.showNav= true
  }
}
