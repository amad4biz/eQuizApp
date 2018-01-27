import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Quiz } from '../model/quiz';
import { QuizService } from '../quiz.service';
import 'rxjs/add/operator/map';
import { RouterState } from '@angular/router/src/router_state';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  quizId: string;
  quiz: Quiz;

  constructor(private aRoute: ActivatedRoute, private qService: QuizService) {
  }
  
  ngOnInit() {
    this.aRoute.params.subscribe(params => {
      this.quizId = params['id'];
    });
    this.qService.getOneById(this.quizId).subscribe(data => this.quiz = data);
  }

}
