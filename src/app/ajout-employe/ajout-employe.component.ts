import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { EmployeesService } from '../../services/EmployeesService/employees.service';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent {
  employeeForm!: FormGroup;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              private ES: EmployeesService,
              private router: Router) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstname: new FormControl('Prénom par défaut'),
      lastname: new FormControl('Nom par défaut'),
      email: new FormControl('email@par.defaut')
    });
  }

  addEmployee() {
    this.ES.createEmployee(this.employeeForm.value).subscribe(
      (response) => {
        console.log(response);
        alert('L\'employé a été ajouté avec succès !');
        this.router.navigate(['/Employee']);
      },
      (error) => {
        console.error(error);
        alert('Une erreur s\'est produite lors de l\'ajout de l\'employé. Veuillez réessayer.');
      }
    );
  }
}
