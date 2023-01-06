import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../../services/LoginService/login.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  seDeconnecter(){
    this.authService.logout();
    this.router.navigateByUrl('/Login');
  }

}
