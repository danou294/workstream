import {Component, OnInit, Input, Inject} from '@angular/core';
import {EmployeesService} from "../../services/EmployeesService/employees.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-employe',
  templateUrl: './delete-employe.component.html',
  styleUrls: ['./delete-employe.component.css']
})
export class DeleteEmployeComponent implements OnInit {
  @Input()
  id!: any; // L'ID de l'employé à supprimer

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ES : EmployeesService,
              private HttpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  this.deleteEmployee(this.id)
  }

  deleteEmployee(id: number) {
    // Envoie une requête DELETE à l'URL http://localhost:3000/employees/{id} pour supprimer l'employé
    this.HttpClient.delete(`http://localhost:3000/employees/${id}`).subscribe();
    alert('L\'employé a été supprimé avec succès !');
    this.router.navigate(['/Employee']);
  }
}
