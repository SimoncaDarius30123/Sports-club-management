import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DataTransferService } from '../../../services/data-transfer-service';
import { TeamAvg } from '../../../interfaces/teamAvg.interface';
import { ClientService } from '../../../services/client-service';
import { Coach } from '../../../interfaces/coach.interface';

@Component({
  selector: 'app-teams-page',
  imports: [],
  templateUrl: './teams-page.html',
  styleUrl: './teams-page.scss',
})
export class TeamsPage {
  //variables
  sportName: String = '';
  sportId: number = 0;
  teams: TeamAvg[] = [];
  cdt = inject(ChangeDetectorRef);
  coachByTeam: { [coachId: number]: TeamAvg | null } = {};
  coaches : Coach[] = [];
  teamCoaches : String[] = [];
  

  //services
  dataTransferService = inject(DataTransferService);
  clientService = inject(ClientService);

  ngOnInit() {
    this.dataTransferService.data$.subscribe({
      next: (data => {
        this.sportName = data.name;
        this.sportId = data.id;
        this.cdt.detectChanges();
      })
    });


    // get teams
    this.clientService.getTeamsNameAndAverage(this.sportId).subscribe({
      next: (team => {
        this.teams = team;
        console.log(team)
        this.cdt.detectChanges();
      })
    });

    //get coaches
    this.clientService.getCoachesBySportId(this.sportId).subscribe({
      next:(coach=>{
        this.coaches = coach;

        this.coaches.forEach(coach=>{
          this.teamCoaches[coach.id] = coach.name;
          this.cdt.detectChanges();
        })
      })
    });
  }

}
