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

  getUsers(){
    return new Observable<User[]>((observer ) => {
      this.HttpClient.get('http://localhost:3000/users', {withCredentials: true}).subscribe((result: any) => {
        const users = []
        for (const jsonUserList of result){
          const user = new User()
          user.loadFromJson(jsonUserList)
          users.push(user)
        }
        observer.next(users)
        observer.complete()
      }, error => {
        observer.error(error);
        observer.complete()
      })
    });
  }



  }

