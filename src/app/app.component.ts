import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly token: string | null = localStorage.getItem('token');
  constructor(private router: Router) {
  }
  title = 'tfjtechnology';

  if (token : string) {
    // Un localstorrage est présent, vous pouvez donc changer le login en logout
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
