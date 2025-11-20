import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Sport } from '../../../interfaces/sport.interface';
import { ClientService } from '../../../services/client-service';

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

  showSportMenu() {
    this.showChooseSportMenu = true;
    this.clientService.getAllSports().subscribe({
      next: (data:Sport[]) => {
        this.sports = data;
        console.log(this.sports);
      }
    });
  };

  closeSportMenu() {
    this.showChooseSportMenu = false;
  }

}
