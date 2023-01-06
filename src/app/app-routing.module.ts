import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {EmployeeComponent} from "./Employee/employee.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginGuard} from "./Guard/GuardAdmin/login.guard";
import {AjoutEmployeComponent} from "./ajout-employe/ajout-employe.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {DeleteEmployeComponent} from "./delete-employe/delete-employe.component";


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Login', component: LoginComponent, },
  { path: 'admin', component: AdminComponent, canActivate:[LoginGuard] },
  { path: 'Employee', component: EmployeeComponent, canActivate:[LoginGuard] },
  { path: 'Employee-ajout', component: AjoutEmployeComponent, canActivate:[LoginGuard] },
  { path: 'Employee-modif/:id', component: UpdateEmployeeComponent, canActivate:[LoginGuard] },
  { path: 'Employee-delete/:id', component: DeleteEmployeComponent, canActivate:[LoginGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
