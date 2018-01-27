import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from '../model/quiz';

@Pipe({
  name: 'quizFilter'
})
export class QuizFilterPipe implements PipeTransform {

  transform(quizList: Quiz[], active: boolean = false, phrase: string = ""): Quiz[] {
    if (!quizList) return quizList;
    return quizList.filter( (quiz: Quiz) => {
      let activeFilter = (active && quiz.active) || !active;
      let phraseFilter = (quiz.title.toLowerCase()
                          .indexOf(phrase.toLowerCase()) > -1) || !phrase;
      return activeFilter && phraseFilter;
    });
  }

}
