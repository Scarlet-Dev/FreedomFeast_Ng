import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './component/users.module';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { UserRegsitrationComponent } from './component/register/user-regsitration/user-regsitration.component';
import { ProviderRegsitrationComponent } from './component/register/provider-regsitration/provider-regsitration.component';

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
  { path: 'users', loadChildren: () => UsersModule },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }), UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }