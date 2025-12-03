import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { ChatbotService } from '../../services/chatbot-service';

@Component({
  selector: 'app-ai',
  imports: [FontAwesomeModule, NgIf, NgClass, FormsModule],
  templateUrl: './ai.html',
  styleUrl: './ai.scss',
})
export class Ai {

  //variables
  showAvatar: boolean = true;
  showAiChatMenu: boolean = false;
  messages: String[] = [];
  request: String = ''
  cdt = inject(ChangeDetectorRef);
  numberOfMessages = 0;
  startAnimation:boolean = false;


  // icons
  faRobot = faRobot;

  // services
  chatbotService = inject(ChatbotService);



  ngOnInit() {
    this.messages[0] = "Ask me something about a player or a team";
    
  }

  showAiChat() {
    this.showAvatar = false;
    this.showAiChatMenu = true;
  }

  closeAiChat() {
    this.showAiChatMenu = false;
    this.showAvatar = true;
  }

  sendRequest(request:String){
    this.numberOfMessages++;
    this.messages[this.numberOfMessages] = request;
    this.request = ''
    this.numberOfMessages++;
    this.messages[this.numberOfMessages] = '...';
    this.startAnimation = true;

    this.chatbotService.askGemini(request).subscribe({
      next:(message =>{
        this.messages[this.numberOfMessages] = message;
        this.startAnimation = false;
        this.cdt.detectChanges();
      })
    })
  }
}
