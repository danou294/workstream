import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable, Subscriber, Subscription} from "rxjs";
import {environment} from "../../environnements/environnement";
import { User } from "../../models/user/user"
import {Employee} from "../../models/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpClient: HttpClient,
  ) {}



  getUsers() {
    return this.HttpClient.get<User[]>('http://localhost:3000/users')
  }


  }

