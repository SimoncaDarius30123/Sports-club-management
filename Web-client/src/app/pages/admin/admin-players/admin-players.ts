import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Sport } from '../../../interfaces/sport.interface';
import { AdminService } from '../../../services/admin-service';
import { PlayerAdmin } from '../../../interfaces/playerAdmin.interface';

@Component({
  selector: 'app-admin-players',
  imports: [],
  templateUrl: './admin-players.html',
  styleUrl: './admin-players.scss',
})
export class AdminPlayers {

  //variables
  players: PlayerAdmin[] = [];
  cdt = inject(ChangeDetectorRef);


  //services
  adminService = inject(AdminService);

  ngOnInit(){
    this.adminService.getAllPlayersForAdmin().subscribe({
      next:(players=>{
        this.players = players;
        this.cdt.detectChanges();
      })
    });
  }


}
