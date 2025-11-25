import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player.interface';
import { Team } from '../interfaces/team.interface';
import { Coach } from '../interfaces/coach.interface';
import { Sport } from '../interfaces/sport.interface';
import { ClientAccount } from '../interfaces/clientAccount.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  http = inject(HttpClient);

  getAllPlayers():Observable<Player[]>{
    const url = `http://localhost:8080/api/player/get-all`;
    return this.http.get<Player[]>(url);
  }

  getAllTeams():Observable<Team[]>{
    const url = `http://localhost:8080/api/team/get-all-teams`;
    return this.http.get<Team[]>(url);
  }

  getAllCoaches():Observable<Coach[]>{
    const url = `http://localhost:8080/api/coach/get-all`;
    return this.http.get<Coach[]>(url);
  }

  getAllSports():Observable<Sport[]>{
    const url = 'http://localhost:8080/api/sport/get-all-sports';
    return this.http.get<Sport[]>(url);
  }

  getAllUsers():Observable<ClientAccount[]>{
    const url = `http://localhost:8080/api/client-account/get-all`;
    return this.http.get<ClientAccount[]>(url);
  }
}
