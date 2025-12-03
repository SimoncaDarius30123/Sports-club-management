import { Component } from '@angular/core';
import { ClientNavbar } from "../../components/client-navbar/client-navbar";
import { RouterOutlet } from '@angular/router';
import { Ai } from "../../components/ai/ai";

@Component({
  selector: 'app-client',
  imports: [ClientNavbar, RouterOutlet, Ai],
  templateUrl: './client.html',
  styleUrl: './client.scss',
})
export class Client {

}
