import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SlideshowModule } from 'ng-simple-slideshow';

import { FeastFreedomApiService } from './services/feast-freedom-api.service';

import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './component/users.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UserRegsitrationComponent } from './component/register/user-regsitration/user-regsitration.component';
import { ProviderRegsitrationComponent } from './component/register/provider-regsitration/provider-regsitration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    UserRegsitrationComponent,
    ProviderRegsitrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SlideshowModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule
  ],
  providers: [FeastFreedomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
