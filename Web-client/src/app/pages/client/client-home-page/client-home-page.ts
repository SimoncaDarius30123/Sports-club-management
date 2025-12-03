import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Sport } from '../../../interfaces/sport.interface';
import { ClientService } from '../../../services/client-service';
import { DataTransferService } from '../../../services/data-transfer-service';

@Component({
  selector: 'app-client-home-page',
  imports: [NgIf],
  templateUrl: './client-home-page.html',
  styleUrl: './client-home-page.scss',
})
export class ClientHomePage {

  //variables
  showChooseSportMenu: boolean = false;
  sports: Sport[] = [];
  clientService = inject(ClientService);
  cdr = inject(ChangeDetectorRef);
  chosenSport: Sport | null = null;
  dataTransferService = inject(DataTransferService)

  showSportMenu() {
    this.showChooseSportMenu = true;
    this.clientService.getAllSports().subscribe({
      next: (data:Sport[]) => {
        this.sports = data;
        this.cdr.detectChanges();
      }
    });
  };

  closeSportMenu() {
    this.showChooseSportMenu = false;
  }

  chooseSport(sport: Sport) {
    this.chosenSport = sport;
    this.dataTransferService.sendData(sport);
    this.closeSportMenu();
  }

}
