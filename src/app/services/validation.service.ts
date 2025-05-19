import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    nameRegex = /^[A-Za-z]+$/; 
    // emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/; 
    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // General email regex
    passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    validateName(name: string): boolean {
        return this.nameRegex.test(name);
    }

    validateEmail(email: string): boolean {
        return this.emailRegex.test(email);
    }

    validatePassword(password: string): boolean {
        return this.passwordRegex.test(password);
    }

    passwordsMatchValidator(form: AbstractControl): ValidationErrors | null {
        const password = form.get('password')?.value;
        const confirmPassword = form.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { mismatch: true };
      }

      domainValidator(allowedDomains: string[]): (control: AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
          const email = control.value;
          if (!email) return null; // Skip validation if the field is empty
    
          const domain = email.split('@')[1];
          if (allowedDomains.includes(domain)) {
            return null; // Valid domain
          } else {
            return { invalidDomain: true }; // Invalid domain
          }
        };
    }
}
