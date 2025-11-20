import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { faHome, faPeopleGroup, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-client-navbar',
  imports: [RouterLink, RouterLinkActive, FaIconComponent,NgIf],
  templateUrl: './client-navbar.html',
  styleUrl: './client-navbar.scss',
})
export class ClientNavbar {
  //variables
  usernameAvatar: string = '';
  username: string = '';
  email: string = '';
  showUserMenu: boolean = false;

  //icons
  faHome = faHome;
  faCoach = faUserTie;
  faTeam = faPeopleGroup;
  faPlayer = faUser;


  disconnect() {
    localStorage.removeItem('AUTH_TOKEN');
    window.location.reload();
  }

  ngOnInit() {
    const token = localStorage.getItem('AUTH_TOKEN');
    const payload = token ? this.decodeJwt(token) : null;
    this.usernameAvatar = payload.sub.slice(0, 2).toUpperCase();
    this.username = payload.sub;
    this.email = payload.email;
  }

  showMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  decodeJwt(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }
}
