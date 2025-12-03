import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFootballBall, faTachometerAlt, faUser, faUserAlt, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-admin-navbar',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-navbar.html',
  styleUrl: './admin-navbar.scss',
})
export class AdminNavbar {


  // icons
  faFashboard = faTachometerAlt;
  faCoach = faUserTie;
  faPlayer = faUserAlt;
  faTeams = faUsers;
  faSport = faFootballBall;
  faUsers = faUser;


  disconnect() {
    localStorage.removeItem("AUTH_TOKEN");
    window.location.reload();
  }
}
