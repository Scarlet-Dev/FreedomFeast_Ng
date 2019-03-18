import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularComponent } from './users/regular/regular.component';
import { ProvidersComponent } from './users/providers/providers.component';
import { OrdersComponent } from './orders/orders.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
// import { SettingsComponent } from './settings/settings.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { ProviderMenuComponent } from './provider-menu/provider-menu.component';

const UserRoutes: Routes = [
  {
    path: 'users', canActivate: [], children: [
      {
        path: 'regular', component: RegularComponent, canActivateChild: [true], children: [
          { path: 'cart', component: CartComponent },
          { path: '', component: MenuComponent },
          // { path: 'settings', component: SettingsComponent },
          { path: 'order-history', component: OrdersComponent },
          { path: 'checkout', component: CheckoutComponent },
          { path: 'confirmation', component: ConfirmationComponent }
        ]
      },
      {
        path: 'providers', component: ProvidersComponent, canActivateChild: [true], children: [
          { path: 'orders', component: OrdersComponent },
          // { path: 'settings', component: SettingsComponent },
          { path: 'order-history', component: OrdersComponent },
          { path: 'menu', component: ProviderMenuComponent },
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
