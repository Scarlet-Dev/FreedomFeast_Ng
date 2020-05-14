import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersMainModule } from "./users/users-main.module";

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegsitrationComponent } from './register/user-regsitration/user-regsitration.component';
import { ProviderRegsitrationComponent } from './register/provider-regsitration/provider-regsitration.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register', component:RegisterComponent, children: [
      { path: 'user', component: UserRegsitrationComponent },
      { path: 'provider', component: ProviderRegsitrationComponent }
    ]
  },
  { path: 'users', loadChildren: () => UsersMainModule },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,), UsersMainModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//  { enableTracing: true }