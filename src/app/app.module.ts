import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataService } from './services/form-data.service';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, SignUpComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [FormDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
