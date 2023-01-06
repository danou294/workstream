import { Component } from '@angular/core';
import { Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EmployeesService } from '../../services/EmployeesService/employees.service';
import {EmployePut} from "../../models/EmployePut/employe-put";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modification-employe',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeId!: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              @Inject(FormBuilder) private formBuilder: FormBuilder,
              private ES : EmployeesService ) {
    this.employeeForm = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('')
    });
    this.employeeId = '';
  }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.ES.getEmployeeById(this.employeeId).subscribe((employeeData: any) => { // Modifiez le type de l'objet employeeData
      this.employeeForm = this.formBuilder.group({
        firstname: new FormControl(employeeData.firstname),
        lastname: new FormControl(employeeData.lastname),
        email: new FormControl(employeeData.email)
      });
    });
  }


  updateEmployee() {
    this.ES.updateEmployee(this.employeeId, this.employeeForm.value as EmployePut).subscribe( // Modifiez le type du second argument
      (response) => {
        console.log(response);
        alert('L\'employé a été ajouté avec succès !');
        this.router.navigate(['/Employee']);
        // Affichez un message de confirmation de mise à jour réussie et redirigez l'utilisateur vers la page de listing des employés
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
