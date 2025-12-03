import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartColumn, faChartLine, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Player } from '../../../interfaces/player.interface';
import { AdminService } from '../../../services/admin-service';
import { Team } from '../../../interfaces/team.interface';
import { Coach } from '../../../interfaces/coach.interface';
import { Sport } from '../../../interfaces/sport.interface';
import { ClientAccount } from '../../../interfaces/clientAccount.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  //variables
  cdt = inject(ChangeDetectorRef);
  players: Player[] = [];
  totalPlayers = 0;
  teams: Team[] = [];
  totalTeams = 0;
  coaches: Coach[] = [];
  totalCoaches = 0;
  sports: Sport[] = [];
  totalSports = 0;
  users: ClientAccount[] = [];
  totalUsers = 0;

  // services
  adminService = inject(AdminService);


  //icons
  faInfo = faInfoCircle;
  faStatistic = faChartColumn;


  ngOnInit() {
    this.adminService.getAllPlayers().subscribe({
      next: (data => {
        this.players = data;
        this.totalPlayers = this.players.length;
        this.cdt.detectChanges();
      })
    });

    this.adminService.getAllTeams().subscribe({
      next: (data => {
        this.teams = data;
        this.totalTeams = this.teams.length;
        this.cdt.detectChanges();
      })
    });

    this.adminService.getAllCoaches().subscribe({
      next: (data => {
        this.coaches = data;
        this.totalCoaches = this.coaches.length;
        this.cdt.detectChanges();
      })
    });

    this.adminService.getAllSports().subscribe({
      next: (data => {
        this.sports = data;
        this.totalSports = this.sports.length;
        this.cdt.detectChanges();
      })
    });

    this.adminService.getAllUsers().subscribe({
      next: (data => {
        this.users = data;
        this.totalUsers = this.users.length;
        this.cdt.detectChanges();
      })
    })
  }
}
