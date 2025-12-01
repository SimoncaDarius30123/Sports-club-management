import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { TeamAdmin } from '../../../interfaces/teamAdmin.interface';
import { AdminService } from '../../../services/admin-service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Sport } from '../../../interfaces/sport.interface';

@Component({
  selector: 'app-admin-teams',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './admin-teams.html',
  styleUrl: './admin-teams.scss',
})
export class AdminTeams {

  // variables
  teams: TeamAdmin[] = [];
  cdt = inject(ChangeDetectorRef);
  showAddTeamMenu: boolean = false;
  sports: Sport[] = [];
  teamName: string = '';
  isSelected: boolean = false;
  sportId: number = 0;
  errorMessage: string = '';
  succesMessage: string = '';
  selectedSport: Sport | null = null;
  showUpdateTeamMenu: boolean = false;
  teamToUpdate: TeamAdmin | null = null;

  // services
  adminService = inject(AdminService);

  ngOnInit() {
    this.adminService.getAllTeamsAdmin().subscribe({
      next: ((teams) => {
        this.teams = teams;
        this.cdt.detectChanges();
      })
    });

    this.adminService.getAllSports().subscribe({
      next: ((sports) => {
        this.sports = sports;
        this.cdt.detectChanges();
      })
    })

  }

  selectSport(sport: Sport) {
    this.isSelected = true;
    this.sportId = sport.id;
    this.selectedSport = sport;
  }

  openAddTeamMenu() {
    this.showAddTeamMenu = true;
  }

  closeAddTeamMenu() {
    this.showAddTeamMenu = false;
  }

  addTeam(teamName: string) {
    if (!teamName || !this.selectedSport) {
      this.errorMessage = "Wrong request!";
      this.cdt.detectChanges();
    }
    else {
      this.adminService.addTeam(teamName, this.selectedSport).subscribe({
        next: (() => {
          this.errorMessage = '';
          this.succesMessage = "Succes!";
          this.cdt.detectChanges();
          setTimeout(() => {
            window.location.reload();
          }, 1500)
        }),
        error: (() => {
          this.succesMessage = '';
          this.errorMessage = "This team already exists!";
          this.cdt.detectChanges();
        })
      })
    }
  }

  deleteTeam(team: TeamAdmin) {
    this.adminService.deleteTeam(team).subscribe({
      next: (() => {
        window.location.reload();
      })
    })
  }

  openUpdateMenu(team:TeamAdmin) {
    this.showUpdateTeamMenu = true;
  }

}
