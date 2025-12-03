import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/client-account/login';

  login(email: string, password: string): Observable<{token:string}> {
    const body = { email, password };
    return this.http.post<{token:string}>(this.apiUrl, body);
  }
}
