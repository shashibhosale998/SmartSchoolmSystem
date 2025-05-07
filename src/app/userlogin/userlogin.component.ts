import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent implements OnInit {
  url: string = "http://localhost:8080/api/users/login";
  users: User = new User();

  constructor(private http: HttpClient, private router: Router) {}  

  ngOnInit(): void {}

  onLogin() {
    console.log('User Login:', this.users);
  
    this.http.post(this.url, this.users)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response);
          alert('Login Successful');

          // ✅ Corrected route
          this.router.navigate(['/app-admindashboard']);
        },
        (error) => {
          console.error('Login failed:', error);
          alert('Login failed: ' + error.error);
        }
      );
  }
  submit(){
    
  }
}
