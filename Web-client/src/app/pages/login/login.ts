import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Background } from "../../components/background/background";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { LoginService } from '../../services/loginService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Background, FormsModule, FontAwesomeModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  //variables
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';

  //services
  loginService = inject(LoginService);

  // icons
  faUser = faUser;
  faLocker = faLock
  faEye = faEye;

   cdr = inject(ChangeDetectorRef);

  login(): void {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('AUTH_TOKEN', response.token);
        this.errorMessage = '';
        window.location.reload();
      },
      error: () => {
        this.errorMessage = "Wrong credentials!";
        this.cdr.detectChanges();
      }
    })
  };

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
