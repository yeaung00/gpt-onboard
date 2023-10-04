import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { GptServiceService } from './gpt-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpt-test';
  result$: Subject<string> = new Subject<string>();
  prompt = new FormControl();

  getData() {
    return this.gptService.getDataFromOpenAI(this.prompt.value).subscribe((data) => {
      console.log(data)
    })
  }
  constructor(private gptService: GptServiceService) { }
}
