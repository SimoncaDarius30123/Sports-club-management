import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ai',
  imports: [FontAwesomeModule],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
})
export class Ai {
  faRobot = faRobot;
}
