import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module'

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLayoutModule } from '../material-layout/material-layout.module';

import { LocalStorageService } from '../services/local-storage.service';
import { FeastFreedomApiService } from '../services/feast-freedom-api.service';

import { ProvidersComponent } from './users/providers/providers.component';
import { RegularComponent } from './users/regular/regular.component';
import { UsersComponent } from './users.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { OrdersComponent } from './orders/orders.component';
import { KitchenCardsComponent } from './kitchen-cards/kitchen-cards.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SettingsComponent } from './settings/settings.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProviderMenuComponent } from './provider-menu/provider-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component'


@NgModule({
  declarations: [
    KitchenComponent,
    OrdersComponent,
    RegularComponent,
    UsersComponent,
    KitchenCardsComponent,
    ProvidersComponent,
    MenuComponent,
    CartComponent,
    OrderHistoryComponent,
    SettingsComponent,
    CheckoutComponent,
    ConfirmationComponent,
    ProviderMenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialLayoutModule,
  ],
  exports: [
    MaterialLayoutModule
  ],
  providers: [
    LocalStorageService,
    FeastFreedomApiService
  ]
})
export class UsersModule { }