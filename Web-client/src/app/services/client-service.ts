import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sport } from '../interfaces/sport.interface';
import { Coach } from '../interfaces/coach.interface';
import { Team } from '../interfaces/team.interface';
import { TeamAvg } from '../interfaces/teamAvg.interface';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  http = inject(HttpClient);

  getAllSports(): Observable<Sport[]> {
    const url = 'http://localhost:8080/api/sport/get-all-sports';
    return this.http.get<Sport[]>(url);
  }

  getCoachesBySportId(sportId: number): Observable<Coach[]> {
    const url = `http://localhost:8080/api/coach/get-coaches-by-sport-id?sportId=${sportId}`;
    return this.http.get<Coach[]>(url);
  }

  getTeamByCoachId(coachId: number): Observable<Team> {
    const url = `http://localhost:8080/api/team/get-team-by-coach-id?coachId=${coachId}`;
    return this.http.get<Team>(url);
  }

  getTeamsNameAndAverage(sportId: number): Observable<TeamAvg[]> {
    const url = `http://localhost:8080/api/team/get-teams-with-average-player-age?sportId=${sportId}`;
    return this.http.get<TeamAvg[]>(url);
  }


  getPlayersPerCoach(coachId :number):Observable<Player[]>{
    const url = `http://localhost:8080/api/player/get-players-per-coach?coachId=${coachId}`
    return this.http.get<Player[]>(url);
  }

  getPlayersBySportId(sportId :number):Observable<Player[]>{
    const url = `http://localhost:8080/api/player/get-players-by-sport-id?sportId=${sportId}`;
    return this.http.get<Player[]>(url);
  }
}
