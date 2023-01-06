import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import { UserService } from '../../services/UserService/UserService'
import { User } from "../../models/user/user"
import { LoginGuard } from "../Guard/GuardAdmin/login.guard";
import { LoginService } from "../../services/LoginService/login.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-LoginService',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private UserArray: User[] = []

  private User = new User()

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  isSubmitted  =  false;
  constructor(private authService: LoginService,
              private UserService: UserService,
              private router: Router, private formBuilder: FormBuilder,

              ) { }
  ngOnInit() {
    this.UserService.getUsers().subscribe( UserArray => {
      this.UserArray = UserArray
      console.log(this.UserArray)
    })
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
  seConnecter(){
    console.log('le form' + this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      alert('identifiant incorrect merci de bien vouloir reesayer');
      return;
    }
    this.authService.Login(this.loginForm.value, this.UserArray);
    alert('identifiant correct bienvenue super utilisateur');
    this.router.navigateByUrl('/Employee');
  }

}
