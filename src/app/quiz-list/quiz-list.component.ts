import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Quiz } from '../model/quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  list: Observable<Quiz[]>;
  isActive: Quiz;
  phrase: string = "";
  activeCheck: boolean = false;

  constructor(private router: Router, private qService: QuizService) {}

  ngOnInit() {
    this.list = this.qService.getAll();
  }

  goQuiz(quiz: Quiz) {
    if (quiz.active) {
      this.router.navigate(['quiz', quiz._id]);
    }
  }

  setActiveQuiz(quiz: Quiz) {
    this.isActive = quiz;
  }

}
