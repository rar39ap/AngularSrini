import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor';
  users: any; 
  constructor(private http: HttpClient){}

  
  loadUsers() {

     this.users =   this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}

