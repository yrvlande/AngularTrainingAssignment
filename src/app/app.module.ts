import { LoginService } from './services/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


import { LoginFormComponent } from './login/login-form/login-form.component';
import { AppShellComponent } from './shell/app-shell/app-shell.component';
import { LoginGaurdService } from './authgaurd/login-authgaurd/login-gaurd.service';
import { HomeComponent } from './home/home/home.component';
import { EmployeeComponent } from './employee/employee/employee.component';

import {StoreModule} from '@ngrx/store';
import {AppReducer} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AppShellComponent,
    HomeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducer)

  ],
  providers: [LoginService, LoginGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
