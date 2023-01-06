import { Component } from '@angular/core';
import {Employee} from "../../models/employee/employee";
import {EmployeesService} from "../../services/EmployeesService/employees.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

   EmployeeArray: Employee[] = [];

  constructor(
    private ES : EmployeesService
  ) {}

  ngOnInit(): void{
    this.ES.getAll().subscribe(employeeList => {
      this.EmployeeArray = employeeList
    })
  }





}
