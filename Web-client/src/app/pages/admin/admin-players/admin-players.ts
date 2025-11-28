import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Sport } from '../../../interfaces/sport.interface';
import { AdminService } from '../../../services/admin-service';
import { PlayerAdmin } from '../../../interfaces/playerAdmin.interface';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Team } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-admin-players',
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './admin-players.html',
  styleUrl: './admin-players.scss',
})
export class AdminPlayers {

  //variables
  players: PlayerAdmin[] = [];
  cdt = inject(ChangeDetectorRef);
  showAddPlayerMenu: boolean = false;
  sports: Sport[] = [];
  playerName: string = '';
  playerPosition: string = '';
  playerAge: number = 10;
  sportId: number = 0;
  isSelected: boolean = false;
  playerSport: Sport | null = null;
  succesMessage: string = '';
  errorMessage: string = '';
  showUpdateMenu: boolean = false;
  playerNewName: string = '';
  playerNewPosition: string = '';
  playerNewAge: number = 0;
  player: PlayerAdmin | null = null;
  showAssignToTeamMenu: boolean = false;
  teams: Team[] = [];


  //services
  adminService = inject(AdminService);

  ngOnInit() {
    this.adminService.getAllPlayersForAdmin().subscribe({
      next: (players => {
        this.players = players;
        this.cdt.detectChanges();
      })
    });

    this.adminService.getAllSports().subscribe({
      next: ((sports) => {
        this.sports = sports;
        this.cdt.detectChanges();
      })
    });

  }

  openOrCloseAddPlayerMenu() {
    this.showAddPlayerMenu = !this.showAddPlayerMenu;
    this.playerName = '';
    this.playerPosition = '';
  }

  selectSport(sport: Sport) {
    this.playerSport = sport;
    this.isSelected = true;
    this.sportId = sport.id;
  }

  addPlayer(name: string, position: string, age: number) {
    if (!name || !position || !age || !this.playerSport) {
      this.errorMessage = "Invalid request!";
      this.cdt.detectChanges();
    }
    else {
      this.adminService.addPlayer(name, position, age, this.playerSport).subscribe({
        next: (() => {
          this.errorMessage = '';
          this.succesMessage = "Succes";
          setTimeout(() => {
            window.location.reload();
          }, 2000)
          this.cdt.detectChanges();
        }),
        error: (() => {
          this.succesMessage = '';
          this.errorMessage = 'This player already exists!';
          this.cdt.detectChanges();
        })
      })
    }
  }

  deletePlayer(playerId: number) {
    this.adminService.deletePlayer(playerId).subscribe({
      next: (() => {
        this.cdt.detectChanges();
        window.location.reload();
      })
    })
  }

  openUpdateMenu(player: PlayerAdmin) {
    this.showUpdateMenu = true;
    this.playerNewAge = player.age;
    this.player = player;
    this.playerSport = player.sport;
  }

  closeUpdateMenu() {
    this.showUpdateMenu = false;
  }

  updatePlayer(newName: string, newPosition: string, newAge: number) {
    if (!this.player || !this.playerSport) {
      this.errorMessage = "Invalid request!";
      this.cdt.detectChanges();
    }
    else {
      if (this.playerSport.id != this.player.sport.id && this.player.team) {
        alert("This player has a team from a different sport!")
      }
      else {
        this.adminService.updatePlayer(this.player, newName, newPosition, newAge, this.playerSport).subscribe({
          next: (() => {
            this.succesMessage = "Succes";
            this.errorMessage = '';
            this.cdt.detectChanges();
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }),
          error: (() => {
            this.errorMessage = "Player with this name already exists!";
            this.succesMessage = '';
            this.cdt.detectChanges();
          })
        })
      }
    }
  }

  openAssignToTeamMenu(player: PlayerAdmin) {
    if (player.team) {
      alert("This player already has a team!")
    }
    else {
      this.playerName = player.name;
      this.showAssignToTeamMenu = true;
      this.sportId = player.sport.id;
      this.adminService.getTeamsBySportId(player.sport.id).subscribe({
        next: ((teams) => {
          this.teams = teams;
          this.cdt.detectChanges();
        })
      })
    }
  }

  closeAssignToTeamMenu() {
    this.showAssignToTeamMenu = false;
  }

  assignPlayerToTeam(teamName: string) {
    this.adminService.assignPlayerToTeam(this.playerName, teamName, this.sportId).subscribe({
      next:(()=>{
        this.cdt.detectChanges();
        window.location.reload();
      })
    })
  }

}
