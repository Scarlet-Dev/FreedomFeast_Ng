import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialLayoutModule } from '../../material-layout/material-layout.module';

import { ToolbarComponent } from './toolbar.component';
import { CartComponent } from "./cart/cart.component";
import { SettingComponent } from "./setting/setting.component";

@NgModule({
  declarations: [
    ToolbarComponent,
    SettingComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialLayoutModule
  ],
  exports:[
    ToolbarComponent,
    SettingComponent,
    CartComponent
  ]
})
export class ToolbarModule { }
