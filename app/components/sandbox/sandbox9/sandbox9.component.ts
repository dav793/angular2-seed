import { Component }  from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  moduleId: module.id,
  selector: 'sandbox9',
  template: `<div class="card">
    <div class="card-block">

      <p>Sandbox 9 - Reactive Forms</p>
      
      <dynamic-form [questions]="questions"></dynamic-form>
      
    </div>
  </div>`,
  providers:  [QuestionService]
})
export class Sandbox9Component {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}

