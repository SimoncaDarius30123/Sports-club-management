import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AdminService } from '../../../services/admin-service';
import { Sport } from '../../../interfaces/sport.interface';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-sports',
  imports: [FormsModule, NgIf],
  templateUrl: './admin-sports.html',
  styleUrl: './admin-sports.scss',
})
export class AdminSports {
  // variables
  sports: Sport[] = [];
  sportName: string = '';
  playersBySport: number[] = [];
  coachesBySport: number[] = [];
  teamsBySport: number[] = [];
  cdt = inject(ChangeDetectorRef);
  errorMessage: string = '';
  succesMessage: string = '';
  showUpdateMenu: boolean = false;
  sportToUpdate!: Sport;
  newName: string = '';
  showAddSportMenu: boolean = false;

  // services
  adminService = inject(AdminService);

  ngOnInit() {
    this.adminService.getAllSports().subscribe({
      next: (sports) => {
        this.sports = sports;

        this.sports.forEach((sport) => {
          this.adminService.getPlayersBySportId(sport.id).subscribe({
            next: ((players) => {
              this.playersBySport[sport.id] = players.length;
              this.cdt.detectChanges();
            }),
            error: (() => {
              this.playersBySport[sport.id] = 0;
              this.cdt.detectChanges();
            })
          });

          this.adminService.getCoachesBySportId(sport.id).subscribe({
            next: ((coaches) => {
              this.coachesBySport[sport.id] = coaches.length;
              this.cdt.detectChanges();
            }),
            error: (() => {
              this.coachesBySport[sport.id] = 0;
              this.cdt.detectChanges();
            })
          });

          this.adminService.getTeamsBySportId(sport.id).subscribe({
            next: ((teams) => {
              this.teamsBySport[sport.id] = teams.length;
              this.cdt.detectChanges();
            }),
            error: (() => {
              this.teamsBySport[sport.id] = 0;
              this.cdt.detectChanges();
            })
          });

          this.cdt.detectChanges();
        });
      }
    });
  }

  deleteSport(sportId: number) {
    if (this.playersBySport[sportId] > 0 || this.coachesBySport[sportId] > 0 || this.teamsBySport[sportId] > 0) {
      alert("Cannot delete sport with assigned players, coaches, or teams.");
    }
    else {
      this.adminService.deleteSport(sportId).subscribe({
        next: (() => {
          window.location.reload();
          this.cdt.detectChanges();
        })
      });
    }
  }

  updateSport(newName: string) {
    if (newName.trim() === '') {
      this.errorMessage = "Sport name cannot be empty.";
      this.succesMessage = '';
      this.cdt.detectChanges();
    }
    else {
      this.adminService.updateSport(this.sportToUpdate!, newName).subscribe({
        next: (() => {
          this.succesMessage = "Sport updated successfully.";
          this.errorMessage = '';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          this.cdt.detectChanges();
        }),
        error: (() => {
          this.errorMessage = "Sport already exists.";
          this.succesMessage = '';
          this.cdt.detectChanges();
        })
      });
    }
  }

  openUpdateMenu(sport: Sport) {
    if (this.playersBySport[sport.id] > 0 || this.coachesBySport[sport.id] > 0 || this.teamsBySport[sport.id] > 0) {
      alert("Cannot update sport with assigned players, coaches, or teams.");
    }
    else {
      this.showUpdateMenu = true;
      this.sportToUpdate = sport;
      this.cdt.detectChanges();
    }

  }

  closeUpdateMenu() {
    this.errorMessage = '';
    this.succesMessage = '';
    this.showUpdateMenu = false;
    this.newName = '';
    this.cdt.detectChanges();
  }

  openAddSportMenu() {
    this.showAddSportMenu = true;
    this.cdt.detectChanges();
  }

  closeAddSportMenu() {
    this.errorMessage = '';
    this.succesMessage = '';
    this.showAddSportMenu = false;
    this.cdt.detectChanges();
  }

  addSport(sportName: string) {
    if (sportName.trim() === '') {
      this.errorMessage = "Sport name cannot be empty.";
      this.succesMessage = '';
      this.cdt.detectChanges();
    }
    else {
      this.adminService.addSport(sportName).subscribe({
        next: (() => {
          this.succesMessage = "Sport added successfully.";
          this.errorMessage = '';
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          this.cdt.detectChanges();
        }),
        error: (() => {
          this.errorMessage = "Sport already exists.";
          this.succesMessage = '';
          this.cdt.detectChanges();
        })
      });
    }
  }
}
