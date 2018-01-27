import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from './model/quiz';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Quiz';
  
  constructor(public qService: QuizService) {

  }

  ngOnInit() {
  }
}
