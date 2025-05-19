import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { ConfigService } from '../services/config.service';
import { ValidationService } from '../services/validation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule,TranslateModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  showPassword: boolean = false;
  logoPath: string;

  constructor(
    private configService: ConfigService,
    private ValidationService: ValidationService,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.logoPath = this.configService.getLogoPath();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.ValidationService.emailRegex)]],
      password: ['', [Validators.required,
      Validators.minLength(8),
      ]]
    });
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }
  onSubmit() {
    if (this.email.trim() && this.password.trim()) {
      this.authService.login(this.email, this.password).subscribe(users => {
        if (users.length > 0) {
          this.showLoginSuccessPopup();
        } else {
          this.showLoginSuccessPopup();
          // this.router.navigate(['/landing']);
        }
      }, error => {
        this.showLoginFailedPopup();
        // alert('Server error. Please try again later.');
      });
    } else {
      //  alert('Please enter both email and password.');
      this.showLoginFailedPopup();
    }
  }


  private showLoginFailedPopup(): void {
    Swal.fire({
      title: 'Login Failed',
      text: 'Invalid email or password. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK',
      confirmButtonColor: '#2d6a4f',
    });
  }
  private showLoginSuccessPopup(): void {
    Swal.fire({
      title: 'Login Successful!',
      text: 'Welcome back!',
      icon: 'success',
      confirmButtonText: 'Go to Landing Page',
      confirmButtonColor: '#2d6a4f',
    }).then(() => {
      this.router.navigate(['/landing']);
    });
  }
}