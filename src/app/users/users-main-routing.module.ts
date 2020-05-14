import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { MenuComponent } from "./user/kitchen/menu/menu.component";
import { KitchenComponent } from './user/kitchen/kitchen.component';
import { CartComponent } from "./user/cart/cart.component";
import { CheckoutComponent } from "./user/checkout/checkout.component";
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { ConfirmationComponent } from './user/confirmation/confirmation.component';

import { KitchenProviderComponent } from './kitchen-provider/kitchen-provider.component';
import { ProviderSettingsComponent } from './kitchen-provider/provider-settings/provider-settings.component';

const UserRoutes: Routes = [
  {
    path: 'user', canActivate: [], component: UserComponent, children: [
      { path: "menu", component: MenuComponent },
      // { path: 'menu/:provider', component: MenuComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'confirm', component: ConfirmationComponent },
      { path: 'settings', component: UserSettingsComponent },
    ]
  },
  {
    path: 'provider', canActivate: [], component: KitchenProviderComponent, children: [
      { path: 'settings', component: ProviderSettingsComponent },
      // { path: 'order-history' },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersMainRoutingModule { }
