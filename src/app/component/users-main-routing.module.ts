import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const UserRoutes: Routes = [
  {
    path: 'user', canActivate: [], children: []
  },
  {path: 'providers', canActivate: [], children: []}
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersMainRoutingModule { }
