import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Coach } from '../../../interfaces/coach.interface';
import { Team } from '../../../interfaces/team.interface';
import { AdminService } from '../../../services/admin-service';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sport } from '../../../interfaces/sport.interface';


@Component({
  selector: 'app-admin-coaches',
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './admin-coaches.html',
  styleUrl: './admin-coaches.scss',
})
export class AdminCoaches {

  // variables
  teamsByCoach: { [coachId: number]: Team | null } = {};
  teamsWithNoCoach: Team[] = [];
  coaches: Coach[] = [];
  cdt = inject(ChangeDetectorRef);
  showAddCoachMenu = false;
  showAssignToTeamMenu = false;
  coachName: string = '';
  coachEmail: string = '';
  coachSport: Sport | null = null;
  sports: Sport[] = [];
  isSelected: boolean = false;
  sportId: number = 0;
  errorMessage: string = '';
  succesMessage: string = '';
  showUpdateMenu: boolean = false;
  coach: Coach | null = null;
  coachNewName: string = '';
  coachNewEmail: string = '';

  // services
  adminService = inject(AdminService);

  ngOnInit() {
    this.adminService.getAllCoaches().subscribe({
      next: (data => {
        this.coaches = data;
        this.cdt.detectChanges();
        this.coaches.forEach(coach => {
          this.adminService.getTeamByCoachId(coach.id).subscribe({
            next: (team => {
              this.teamsByCoach[coach.id] = team;
              this.cdt.detectChanges();
            })
          })
        });
      })
    });

    this.adminService.getAllSports().subscribe({
      next: (sports => {
        this.sports = sports;
        this.cdt.detectChanges();
      })
    });


  }

  openOrCloseAddCoachMenu() {
    this.showAddCoachMenu = !this.showAddCoachMenu;
  }

  openAssignToTeamMenu(sportId: number, coachName: string, coachId: number) {
    if (this.teamsByCoach[coachId]) {
      alert("This coach already train a team!")
    }
    else {

      this.coachName = coachName;
      this.showAssignToTeamMenu = true;
      this.adminService.getTeamsWithNoCoachAndBySportId(sportId).subscribe({
        next: (teams => {
          this.teamsWithNoCoach = teams;
          this.cdt.detectChanges();
        })
      })
    }
  }

  closeAssignToTeamMenu() {
    this.showAssignToTeamMenu = false;
    this.coachName = '';
  }

  assignCoachToTeam(teamName: string, coachName: string) {
    coachName = this.coachName;
    this.adminService.assignCoachToTeam(teamName, coachName).subscribe({
      next: (() => {
        window.location.reload();
      })
    })
  }

  unassignCoachFromTeam(coachName:string,sportId:number){
    this.adminService.unassignCoachFromTeam(coachName,sportId).subscribe({
      next:(()=>{
        window.location.reload();
      })
    })
  }

  selectSport(sport: Sport) {
    this.coachSport = sport;
    this.isSelected = true;
    this.sportId = sport.id;
  }

  addCoach(name: string, email: string, sport: Sport | null) {
    if (!this.isSelected || !sport) {
      this.errorMessage = "You need to select a sport first!"
      this.cdt.detectChanges();
    }
    else {
      this.adminService.addCoach(name, email, sport).subscribe({
        next: (() => {
          this.succesMessage = "Succes";
          this.errorMessage = '';
          this.cdt.detectChanges();
          setTimeout(() => {
            window.location.reload();
          }, 2000);

        }),
        error: (() => {
          this.errorMessage = "Coach already exist!";
          this.succesMessage = '';
          this.cdt.detectChanges();
        })
      })

    }
  }

  deleteCoach(id: number) {
    console.log(id);
    this.adminService.deleteCoach(id).subscribe({
      next: (() => {
        window.location.reload();
      })
    })
  }

  openUpdateMenu(coach: Coach) {
    this.showUpdateMenu = true;
    this.coach = coach;

  }

  closeUpdateMenu() {
    this.showUpdateMenu = false;
    this.coachNewName = '';
    this.coachNewEmail = '';
    this.errorMessage = '';
    this.succesMessage = '';
    
  }

  updateCoach(coachNewName:string,coachNewEmail:string){
    if(this.coach === null || this.coachSport === null){
      this.errorMessage = "Invalid request !";
    }
    else{
      if(this.coachSport.id != this.coach.sport.id && this.teamsByCoach[this.coach.id]){
        alert("This coach train a team of different sport!")
      }
      else{
      this.adminService.updateCoach(this.coach,coachNewName,coachNewEmail,this.coachSport).subscribe({
        next:(()=>{
          this.succesMessage = "Succes";
          this.errorMessage = '';
          this.cdt.detectChanges();
          setTimeout(()=>{
            window.location.reload();
          },2000)
        }),
        error:(()=>{
          this.errorMessage = "Email already exists!";
          this.succesMessage = '';
          this.cdt.detectChanges();
        })
      })
    }
    }
  }

}
