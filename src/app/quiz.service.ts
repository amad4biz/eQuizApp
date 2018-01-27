import { Injectable } from '@angular/core';
import { Quiz } from './model/quiz';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  apiUrl: string = "http://localhost:3999/quiz";
  quizSubject: Subject<Quiz[]> = new Subject();

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.apiUrl);
  }

  getOneById(id: string): Observable<Quiz> {
    console.log(id);
    return this.http.get<Quiz>(this.apiUrl + "/" + id);
  }

  create(quiz?: Quiz): void {
    this.http.post(this.apiUrl, {}).forEach( (value) => {
      console.log("post complete: ", value);
    });
  }



}
