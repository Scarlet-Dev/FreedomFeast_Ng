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
import { CardComponent } from './users/user/kitchen/card/card.component';
import { KitchenComponent } from './users/user/kitchen/kitchen.component';
import { MenuComponent } from "./users/user/kitchen/menu/menu.component";
import { CheckoutComponent } from './users/user/checkout/checkout.component';
import { ConfirmationComponent } from './users/user/confirmation/confirmation.component';
import { UserSettingsComponent } from './users/user/user-settings/user-settings.component';


@NgModule({
  declarations: [
    UsersMainComponent,
    UserComponent,
    UserSettingsComponent,
    KitchenComponent,
    CardComponent,
    MenuComponent,
    CheckoutComponent,
    ConfirmationComponent,
    KitchenProviderComponent,
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
