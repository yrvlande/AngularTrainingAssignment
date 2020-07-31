import { EmployeeComponent } from './employee/employee/employee.component';
import { HomeComponent } from './home/home/home.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AppShellComponent } from './shell/app-shell/app-shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGaurdService } from './authgaurd/login-authgaurd/login-gaurd.service';
import { AppComponent } from './app.component';
import { EmployeeAccessGuard } from './authgaurd/employee-access.guard';


const routes: Routes = [
  {path: 'app-shell', redirectTo: '/app-shell/home', pathMatch: 'full'},
  {path: 'app-shell', component: AppShellComponent,
   children: [
    {path: 'home',  component: HomeComponent},
    {path: 'employee', component: EmployeeComponent, canActivate: [EmployeeAccessGuard]}
   ]},
  {path: 'log-in', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
