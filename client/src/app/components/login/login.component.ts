import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:string ="";
password:string ="";

constructor(private authService: AuthService, private router: Router) {}
login(): void {
  if (this.authService.authenticate(this.username, this.password)) {
    // Redirect to the dashboard when credentials are valid
    this.router.navigate(['/dashboard']);
  } else {
    // Handle authentication failure (show error message, etc.)
    console.log('Invalid credentials');
    window.location.reload();
  }
}
}
