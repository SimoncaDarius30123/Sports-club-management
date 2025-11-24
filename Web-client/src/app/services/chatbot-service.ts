import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  http = inject(HttpClient);

  askGemini(request:String):Observable<string>{
    const url = `http://localhost:8080/api/ai`;
    return this.http.post(url, { request }, { responseType: 'text' });
  }
}
