import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Background } from '../../components/background/background';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

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

  //services

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
    // Registration logic to be implemented
  }
}
