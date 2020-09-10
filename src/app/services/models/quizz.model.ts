import {Question} from './question.model';
export class Quizz {
    _id:  string;
    name: string;
    categorie: string;
    questions: Question[];
}