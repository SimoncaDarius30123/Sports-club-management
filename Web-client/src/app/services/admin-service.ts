import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Player } from '../interfaces/player.interface';
import { Team } from '../interfaces/team.interface';
import { Coach } from '../interfaces/coach.interface';
import { Sport } from '../interfaces/sport.interface';
import { ClientAccount } from '../interfaces/clientAccount.interface';
import { PlayerAdmin } from '../interfaces/playerAdmin.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  http = inject(HttpClient);

  getAllPlayers(): Observable<Player[]> {
    const url = `http://localhost:8080/api/player/get-all`;
    return this.http.get<Player[]>(url);
  }

  getAllTeams(): Observable<Team[]> {
    const url = `http://localhost:8080/api/team/get-all-teams`;
    return this.http.get<Team[]>(url);
  }

  getAllCoaches(): Observable<Coach[]> {
    const url = `http://localhost:8080/api/coach/get-all`;
    return this.http.get<Coach[]>(url);
  }

  getAllSports(): Observable<Sport[]> {
    const url = 'http://localhost:8080/api/sport/get-all-sports';
    return this.http.get<Sport[]>(url);
  }

  getAllUsers(): Observable<ClientAccount[]> {
    const url = `http://localhost:8080/api/client-account/get-all`;
    return this.http.get<ClientAccount[]>(url);
  }

  getTeamByCoachId(coachId: number): Observable<Team> {
    const url = `http://localhost:8080/api/team/get-team-by-coach-id?coachId=${coachId}`;
    return this.http.get<Team>(url);
  }

  addCoach(name: string, email: string, sport: Sport): Observable<Coach> {
    const url = 'http://localhost:8080/api/coach/add-coach';
    return this.http.post<Coach>(url, { name, email, sport });
  }

  deleteCoach(id: number): Observable<any> {
    const url = `http://localhost:8080/api/coach/delete?id=${id}`;
    return this.http.delete<any>(url)
  }

  getTeamsWithNoCoachAndBySportId(sportId: number): Observable<Team[]> {
    const url = `http://localhost:8080/api/team/get-teams-with-no-coach?sportId=${sportId}`;
    return this.http.get<Team[]>(url);
  }

  assignCoachToTeam(teamName: string, coachName: string): Observable<any> {
    const url = 'http://localhost:8080/api/team/assign-coach-to-team';
    return this.http.put<any>(url, { teamName, coachName });
  }

  updateCoach(coach: Coach, newName: string, newEmail: string, newSport: Sport): Observable<any> {
    const url = `http://localhost:8080/api/coach/update`;
    return this.http.put<any>(url, { coach, newName, newEmail, newSport });
  }

  getAllPlayersForAdmin(): Observable<PlayerAdmin[]> {
    const url = `http://localhost:8080/api/player/get-all`;
    return this.http.get<PlayerAdmin[]>(url);
  }

  addPlayer(name: string, position: string, age: number, sport: Sport): Observable<any> {
    const url = `http://localhost:8080/api/player/add-player`;
    return this.http.post<any>(url, { name, position, age, sport });
  }

  deletePlayer(playerId: number): Observable<any> {
    const url = `http://localhost:8080/api/player/delete-by-id?playerId=${playerId}`;
    return this.http.delete<any>(url);
  }

  updatePlayer(player: PlayerAdmin, newName: string, newPosition: string, newAge: number, sport: Sport): Observable<any> {
    const url = `http://localhost:8080/api/player/update-player`;
    return this.http.put<any>(url, { player, newName, newPosition, newAge, sport });
  }

  getTeamsBySportId(sportId: number): Observable<Team[]> {
    const url = `http://localhost:8080/api/team/get-teams-by-sport-id?sportId=${sportId}`;
    return this.http.get<Team[]>(url);
  }

  assignPlayerToTeam(playerName: string, teamName: string, sportId: number):Observable<PlayerAdmin> {
    const url = `http://localhost:8080/api/player/assign-to-team`;
    return this.http.put<PlayerAdmin>(url,{playerName,teamName,sportId});
  }

}
