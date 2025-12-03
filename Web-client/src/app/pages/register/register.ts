import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Background } from '../../components/background/background';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { RegisterService } from '../../services/register-service';

@Component({
  selector: 'app-register',
  imports: [Background, FormsModule, FontAwesomeModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  //variables
  username: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';
  succesMessage: string = '';
  router = inject(Router)

  //services
  registerService = inject(RegisterService);


  // icons
  faUser = faUser;
  faMail = faEnvelope;
  faLocker = faLock;
  faEye = faEye;

  cdr = inject(ChangeDetectorRef);


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  register(): void {
    this.registerService.register(this.username, this.email, this.password).subscribe({
      next: () => {
        this.errorMessage = '';
        this.succesMessage = 'Registration successful! You will be redirected to the login page.';
        this.cdr.detectChanges();

        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      },
      error: () => {
        this.succesMessage = '';
        if (this.username.length < 1 || this.email.length < 1 || this.password.length < 1) {
          this.errorMessage = 'All fields are required.';
        }
        else {
          this.errorMessage = "Email already in use or invalid input.";
        }
        this.cdr.detectChanges();
      }
    })
  };
}
