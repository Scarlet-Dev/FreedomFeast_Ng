import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { UsersMainModule } from "./component/users-main.module";
import { ToolbarModule } from './component/toolbar/toolbar.module';
import { MaterialLayoutModule } from './material-layout/material-layout.module';

import { FeastFreedomApiService } from './services/feast-freedom-api.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RegisterComponent } from './component/register/register.component';
import { UserRegsitrationComponent } from './component/register/user-regsitration/user-regsitration.component';
import { ProviderRegsitrationComponent } from './component/register/provider-regsitration/provider-regsitration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    UserRegsitrationComponent,
    ProviderRegsitrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersMainModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    MaterialLayoutModule
  ],
  exports: [
    BrowserModule,
  ],
  providers: [FeastFreedomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
