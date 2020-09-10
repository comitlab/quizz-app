import {async, TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {QuizzDetailComponent} from '../quizz-detail.component';
import {QuizzService} from '../../../services/quizz/quizz.service';
import {Question} from '../../../services/models/question.model';
import {of} from 'rxjs';

describe('QuizzDetailComponent Component', () => {
  let component: QuizzDetailComponent;
  let fixture: ComponentFixture<QuizzDetailComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [QuizzDetailComponent],
      providers: [QuizzService],
      imports: [AppTestModule],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(QuizzDetailComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
      });
  }));
  it('should create the QuizzDetailComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set QuizzDetailsComponent\'s Observable quizz from QuizzService.getSingleQuizz',
      async(inject([QuizzService], (quizzService: QuizzService) => {
        // GIVEN
        const aQuestion1 = new  Question();
        const aQuestion2 = new  Question();
        aQuestion1._id = '5f3186332de3583e88fb4abc';
        aQuestion2._id = '5f3186332de3583e88fb4abd';
        const expectedGetOneSingleQuizz: Question[] = [aQuestion1, aQuestion2];
        const spyGetOneQuizz = spyOn(quizzService, 'getSingleQuizz').and.returnValue(of(expectedGetOneSingleQuizz));
        // WHEN
        component.ngOnInit();
        // THEN
        expect(spyGetOneQuizz).toHaveBeenCalledTimes(1);
        return component.questions$.subscribe((quizzDatails: Question[]) => {
          expect(quizzDatails).toEqual(expectedGetOneSingleQuizz);
        });
      }))
    );
  });
});


