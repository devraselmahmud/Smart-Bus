import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Fixed typo
})
export class LoginComponent {
  selectedRole: string = 'student'; // Default role
  showUsername: boolean = false; // Show/Hide Username field
  username: string = '';
  email: string = '';
  password: string = '';

  toggleFields() {
    this.showUsername = this.selectedRole === 'admin' || this.selectedRole === 'driver';
  }

  onSubmit() {
    console.log('Form Submitted');
    console.log('Role:', this.selectedRole);
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
