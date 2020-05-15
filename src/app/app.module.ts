import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { UsersMainModule } from "./users/users-main.module";
import { MaterialLayoutModule } from '@app/shared/material-layout/material-layout.module';

import { FeastFreedomApiService } from '@app/shared/services/feast-freedom-api.service';
import { BadgeCounterService } from '@app/shared//services/badge-counter.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { UserRegsitrationComponent } from './register/user-regsitration/user-regsitration.component';
import { ProviderRegsitrationComponent } from './register/provider-regsitration/provider-regsitration.component';

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
    MaterialLayoutModule
  ],
  exports: [
    BrowserModule,
  ],
  providers: [FeastFreedomApiService, BadgeCounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
