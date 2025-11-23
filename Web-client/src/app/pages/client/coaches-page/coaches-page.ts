import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Coach } from '../../../interfaces/coach.interface';
import { DataTransferService } from '../../../services/data-transfer-service';
import { ClientService } from '../../../services/client-service';
import { Team } from '../../../interfaces/team.interface';
import { Player } from '../../../interfaces/player.interface';

@Component({
  selector: 'app-coaches-page',
  imports: [],
  templateUrl: './coaches-page.html',
  styleUrl: './coaches-page.scss',
})
export class CoachesPage {

  // variables
  playersTrained: { [coachId: number]: Player[] | null } = {};
  teamsByCoach: { [coachId: number]: Team | null } = {};
  coaches: Coach[] = [];
  sportName: string = '';
  sportId: number = 0;
  cdt = inject(ChangeDetectorRef);

  // services
  dataTransferService = inject(DataTransferService);
  clientService = inject(ClientService);

  ngOnInit() {
    // select sport
    this.dataTransferService.data$.subscribe((data) => {
      this.sportName = data.name;
      this.sportId = data.id;
    });

    // get coaches
    this.clientService.getCoachesBySportId(this.sportId).subscribe((coaches) => {
      this.coaches = coaches;

      // get teams for every coach
      this.coaches.forEach(coach => {
        this.clientService.getTeamByCoachId(coach.id).subscribe((team: Team) => {
          this.teamsByCoach[coach.id] = team;
          this.cdt.detectChanges();
        });

        // get players per coach
        this.clientService.getPlayersPerCoach(coach.id).subscribe((player: Player[]) => {
          this.playersTrained[coach.id] = player;
          this.cdt.detectChanges();
        })
      });
      
    });

    
  }
}
