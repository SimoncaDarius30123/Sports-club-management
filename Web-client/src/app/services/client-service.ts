import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../interfaces/sport.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  http = inject(HttpClient);

  getAllSports():Observable<Sport[]>{
    const url = 'http://localhost:8080/api/sport/get-all-sports';
    return this.http.get<Sport[]>(url);
  }
}
