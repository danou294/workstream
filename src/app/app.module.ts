import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './Employee/employee.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminComponent } from './admin/admin.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeComponent } from './delete-employe/delete-employe.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    EmployeeComponent,
    AdminComponent,
    AjoutEmployeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
