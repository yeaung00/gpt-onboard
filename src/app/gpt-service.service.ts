import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GptServiceService {

  constructor(private http: HttpClient) { }

  getDataFromOpenAI(text: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + environment.OPENAI_KEY);
    const body = {
      'model': 'gpt-3.5-turbo',
      'temperature': 0.1,
      'messages': [{"role": "user", "content": text}],
      'max_tokens': 10,
    };
    return this.http.post('https://api.openai.com/v1/chat/completions', body, { headers: headers });
  }
}
