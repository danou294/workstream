import { Injectable } from '@angular/core';
import {User} from "../../app/interface/user";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  public Login(User: User, Users: User[]){
    let i=0;
    while (i<Users.length){
      if (Users[0].username==User.username) {
        if (Users[0].password == User.password) {
          localStorage.setItem('ACCESS_TOKEN', "access_token") !== null;
          console.log("element found");
        }
      }
      else {
        console.log("element doesn't exist");
      }
      i=i+1
    }
  }

  public isLog(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN')
  }
}
