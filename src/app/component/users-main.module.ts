import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMainRoutingModule } from './users-main-routing.module'
import { MaterialLayoutModule } from '../material-layout/material-layout.module';
import { ToolbarModule } from './toolbar/toolbar.module';

import { LocalStorageService } from '../services/local-storage.service';
import { FeastFreedomApiService } from '../services/feast-freedom-api.service';

import { UsersMainComponent } from "./users-main.component";
import { KitchenProviderComponent } from './users/kitchen-provider/kitchen-provider.component';
import { UserComponent } from './users/user/user.component';
import { CardComponent } from './kitchen/card/card.component';


@NgModule({
  declarations: [
    UsersMainComponent,
    UserComponent,
    KitchenProviderComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    UsersMainRoutingModule,
    MaterialLayoutModule,
    ToolbarModule
  ],
  exports: [],
  providers: [ LocalStorageService, FeastFreedomApiService]
})
export class UsersMainModule { }
