import{Response} from './response.model';
export class Question {
    _id: string;
    title:  string;
    description: string;
    note: Number;
    nameAttribute: Number;
    responses: Response[];
};