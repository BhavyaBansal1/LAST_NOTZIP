import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { ValidationService } from '../services/validation.service';
import { environment } from '../../environments/environment';
import { SignupResponse,SignupPayload } from '../models/signup';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})

export class SignupComponent {
  signupForm: FormGroup;
  isSubmitting = false;
  emailExists = false;
  logoPath: string;
  apiUrl: string;

  constructor(
    private configService: ConfigService,
    private ValidationService: ValidationService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.logoPath = this.configService.getLogoPath();
    this.apiUrl = `${this.configService.getApiBaseUrl()}/api/Auth/register`;
    this.signupForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.pattern(this.ValidationService.nameRegex)]],
        lastName: ['', [Validators.required, Validators.pattern(this.ValidationService.nameRegex)]],
        email: ['', [Validators.required, 
        Validators.pattern(this.ValidationService.emailRegex),
        this.ValidationService.domainValidator(environment.allowedEmailDomains) ]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(this.ValidationService.passwordRegex),
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.ValidationService.passwordsMatchValidator }
    );

    this.signupForm.get('email')?.valueChanges.subscribe(() => {
      this.emailExists = false;
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const formData = this.signupForm.value;

    const payload:SignupPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password
    };

    this.http.post<SignupResponse>(this.apiUrl, payload).subscribe({
      next: () => {
        Swal.fire({
          title: 'Signup Successful!',
          text: 'Your account has been created successfully.',
          icon: 'success',
          confirmButtonText: 'Go to Login',
          confirmButtonColor: '#2d6a4f',

        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      error: (error) => {
        this.isSubmitting = false;

        console.error('Error response:', error);

        if (error.status === 400 && error.error.message?.toLowerCase().includes('email already exists')) {
          this.emailExists = true;
          Swal.fire({
            title: 'Email Already Exists',
            text: 'The email address you entered is already registered. Please use a different email or log in.',
            icon: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2d6a4f',
          });
        } else {
          Swal.fire({
            title: 'Signup Failed',
            text: 'An unexpected error occurred. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#2d6a4f',
          });
        }
      }
    });
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
}

