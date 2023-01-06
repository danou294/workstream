import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../models/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(
    private HttpClient: HttpClient
  ) {
  }

  getAll() {
    return new Observable<Employee[]>((observer) => {
      this.HttpClient.get('http://localhost:3000/employees', {withCredentials: true}).subscribe((result: any) => {
        const employees = []
        for (const jsonEmployeesList of result) {
          const employee = new Employee()
          employee.loadFromJson(jsonEmployeesList)
          employees.push(employee)
        }
        observer.next(employees)
        observer.complete()
      }, error => {
        observer.error(error);
        observer.complete()
      })
    });
  }

  createEmployee(employee: any) {
    return this.HttpClient.post('http://localhost:3000/employees', employee);
  }

  updateEmployee(id: string, data: any) {
    return this.HttpClient.put(`${this.apiUrl}/${id}`, data);
  }

  getEmployeeById(id: string | null) {
    return this.HttpClient.get(`${this.apiUrl}/${id}`);
  }


}
