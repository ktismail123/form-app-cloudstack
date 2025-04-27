import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, NgIf, NgClass]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitting = false;
  loginError: string | null = null;
  returnUrl: string = '/que'; // Default redirect to questionnaire

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    // Check if user is already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
      return;
    }

    // Get return url from route parameters or default to '/que'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/que';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      // Mark all fields as touched to trigger validation errors
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.loginError = null;

    // Get form values
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    const rememberMe = this.loginForm.get('rememberMe')?.value;

    // For DummyJSON API, we need to use username instead of email
    // In a real application, you would use the email directly
    const username = email.split('@')[0]; // Extract username from email for this demo

    this.authService.login(username, password, rememberMe)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          console.log('Login successful', response);
          this.router.navigateByUrl(this.returnUrl);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.loginError = error.message || 'Login failed. Please check your credentials.';
          console.error('Login error', error);
        }
      });
  }

  forgotPassword(): void {
    // Navigate to forgot password page or show modal
    console.log('Forgot password clicked');
    // this.router.navigate(['/auth/forgot-password']);
  }
}