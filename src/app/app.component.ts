import { Component } from '@angular/core';
import { Subject, filter, map } from 'rxjs';
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
    this.gptService.getDataFromOpenAI(this.prompt.value)
      .subscribe((data: any) => {
        const output = data.choices[0].message.content
        this.result$.next(output)
      })
  }
  constructor(private gptService: GptServiceService) { }
}
