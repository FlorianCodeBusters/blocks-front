import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretComponent } from './components/secret/secret.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [AppComponent, SecretComponent, LoginRegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
