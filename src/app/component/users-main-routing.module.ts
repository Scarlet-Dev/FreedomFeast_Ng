import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './users/user/user.component';
import { MenuComponent } from "./users/user/kitchen/menu/menu.component";
import { KitchenComponent } from './users/user/kitchen/kitchen.component';
import { CartComponent } from "./users/user/cart/cart.component";
import { CheckoutComponent } from "./users/user/checkout/checkout.component";
import { UserSettingsComponent } from './users/user/user-settings/user-settings.component';
import { ConfirmationComponent } from './users/user/confirmation/confirmation.component';

import { KitchenProviderComponent } from './users/kitchen-provider/kitchen-provider.component';
import { ProviderSettingsComponent } from './users/kitchen-provider/provider-settings/provider-settings.component';

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
