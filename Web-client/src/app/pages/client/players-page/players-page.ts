import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DataTransferService } from '../../../services/data-transfer-service';
import { Player } from '../../../interfaces/player.interface';
import { ClientService } from '../../../services/client-service';

@Component({
  selector: 'app-players-page',
  imports: [],
  templateUrl: './players-page.html',
  styleUrl: './players-page.scss',
})
export class PlayersPage {
  //variables
  sportName: string = '';
  sportId: number = 0;
  players : Player[] = [];
  cdt = inject(ChangeDetectorRef);


  //services
  dataTransferService = inject(DataTransferService);
  clientService = inject(ClientService);

  ngOnInit(){
    // taking sport name
    this.dataTransferService.data$.subscribe({
      next: (data => {
        this.sportName = data.name;
        this.sportId = data.id;
        this.cdt.detectChanges();
      })
    });

    // getting players
    this.clientService.getPlayersBySportId(this.sportId).subscribe({
      next:((players)=>{
        this.players = players;
        this.cdt.detectChanges();
      })
    })
  }
}
