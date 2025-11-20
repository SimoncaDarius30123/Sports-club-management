import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  http = inject(HttpClient)
  private apiUrl = 'http://localhost:8080/api/client-account/register';

  register(username: string, email: string, password: string) {
    const body = { username, email, password };
    return this.http.post(this.apiUrl, body);
  }
}
