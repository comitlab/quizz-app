export class QuizService {

    quizs = [];

    getQuizById(id: number) {
        const quiz = this.quizs.find(
            (quizObject) => {
                return quizObject.id === id;
            }
        );
        return quiz;
    }
}