import { Quiz } from '../models/quiz.model';
import { Subject } from 'rxjs/Subject';

export class QuizService {

    private quizs: Quiz[] = [
        
        {
            id: 1,
            title: 'Angular 8 level test',
            session: '2019 - 2020',
            filiere: 'Inormatique',
            question: [
                'Question 1',
                'Question 2'
            ],
            reply: [
                'Reply 1',
                'Reply 2'
            ]
        }
        
    ];

    quizSubject = new Subject<Quiz[]>();

    emitQuizs() {
        this.quizSubject.next(this.quizs.slice());
    }
    
    addQuiz(quiz: Quiz) {
        this.quizs.push(quiz);
        this.emitQuizs();
    }

    getQuizById(id: number) {
        const quiz = this.quizs.find(
            (quizObject) => {
                return quizObject.id === id;
            }
        );
        return quiz;
    }
}