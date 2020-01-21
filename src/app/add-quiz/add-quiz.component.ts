import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz.model';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  // Init quiz and Validators
  initForm() {
    this.quizForm = this.formBuilder.group(
      {
        id: 1, // To review later the id must be self incremented
        title: ['', Validators.required],
        session: ['', Validators.required],
        filiere: ['', Validators.required],
        question: this.formBuilder.array([]),
        reply: this.formBuilder.array([])
      }
    );
  }

  // retrieve input values
  onSubmitForm() {
    const formValue = this.quizForm.value;
    const newQuiz = new Quiz(
      formValue['id'],
      formValue['title'],
      formValue['session'],
      formValue['filiere'],
      formValue['question'], // ? formValue['question'] : [],
      formValue['reply']? formValue['reply'] : []
    );

    // Create a new quiz and redirect to the list of quizzes
    this.quizService.addQuiz(newQuiz);
  //  console.log(newQuiz);
    this.router.navigate(['/quiz-list']);
  }

  // typagez
  getQuestion() {
    return this.quizForm.get('question') as FormArray;
  }
  
  getReply() {
    return this.quizForm.get('reply') as FormArray;
  }

  // Add Control for add Questions and Replys
  onAddQuestion(){
    const newQuestionControl = this.formBuilder.control('', Validators.required);
    this.getQuestion().push(newQuestionControl);
  }

  onAddReply(){
    const newReplyControl = this.formBuilder.control('', Validators.required);
    this.getReply().push(newReplyControl);}

}
