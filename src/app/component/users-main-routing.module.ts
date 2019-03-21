import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from "./users/user/kitchen/menu/menu.component";
import { KitchenComponent } from './users/user/kitchen/kitchen.component';
import { CartComponent } from "./users/user/cart/cart.component";
import { CheckoutComponent } from "./users/user/checkout/checkout.component";
import { UserSettingsComponent } from './users/user/user-settings/user-settings.component';
import { ConfirmationComponent } from './users/user/confirmation/confirmation.component';

const UserRoutes: Routes = [
  {
    path: 'user', canActivate: [], children: [
      { path: 'settings', component: UserSettingsComponent },
      { path: 'kitchen', component: KitchenComponent },
      { path: 'kitchen/:provider_name/menu', component: MenuComponent },
      { path: 'cart', component:CartComponent},
      { path: 'checkout', component:CheckoutComponent },
      { path: 'confirm', component:ConfirmationComponent }
    ]
  },
  { path: 'providers', canActivate: [], children: [] }
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersMainRoutingModule { }
