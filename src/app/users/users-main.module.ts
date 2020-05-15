import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersMainRoutingModule } from './users-main-routing.module'
import { MaterialLayoutModule } from '@app/shared/material-layout/material-layout.module';

import { LocalStorageService } from '@app/shared/services/local-storage.service';
import { FeastFreedomApiService } from '@app/shared/services/feast-freedom-api.service';

import { UsersMainComponent } from "./users-main.component";

import { UserComponent } from './user/user.component';
import { CardComponent } from './user/kitchen/card/card.component';
import { KitchenComponent } from './user/kitchen/kitchen.component';
import { MenuComponent } from "./user/kitchen/menu/menu.component";
import { CheckoutComponent } from './user/checkout/checkout.component';
import { CartComponent } from './user/cart/cart.component'
import { ConfirmationComponent } from './user/confirmation/confirmation.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';

import { KitchenProviderComponent } from './kitchen-provider/kitchen-provider.component';
import { ProviderSettingsComponent } from './kitchen-provider/provider-settings/provider-settings.component';
import { MenuItemComponent, MenuItemDialogDelete, MenuItemDialogUpdate } from './kitchen-provider/menu-item/menu-item.component';


@NgModule({
  declarations: [
    UsersMainComponent,
    UserComponent,
    UserSettingsComponent,
    KitchenComponent,
    CardComponent,
    MenuComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent,
    KitchenProviderComponent,
    ProviderSettingsComponent,
    MenuItemComponent,
    MenuItemDialogUpdate,
    MenuItemDialogDelete,
  ],
  entryComponents:[
    MenuItemDialogUpdate,
    MenuItemDialogDelete
  ],
  imports: [
    CommonModule,
    UsersMainRoutingModule,
    MaterialLayoutModule,
  ],
  exports: [],
  providers: [ LocalStorageService, FeastFreedomApiService]
})
export class UsersMainModule { }
