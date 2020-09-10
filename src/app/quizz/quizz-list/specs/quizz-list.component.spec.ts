import {async, TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {QuizzListComponent} from '../quizz-list.component';
import {QuizzService} from '../../../services/quizz/quizz.service';
import {Quizz} from '../../../services/models/quizz.model';
import {of} from 'rxjs';

describe('Quizz List Component', () => {
  let fixture: ComponentFixture<QuizzListComponent>;
  let component: QuizzListComponent;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [QuizzListComponent],
      providers: [QuizzService],
      imports: [AppTestModule],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(QuizzListComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
      });
  }));

  it('should create the QuizzListComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set QuizzListComponent\'s Observable quizz from QuizzService.getAllQuizz',
      async(inject([QuizzService], (quizzService: QuizzService) => {
        // GIVEN
        const aQuizz1 = new  Quizz();
        const aQuizz2 = new  Quizz();
        const aQuizz3 = new  Quizz();
        aQuizz1.name = 'Central Tactics Developer';
        aQuizz2.name = 'Forward Solutions Director';
        aQuizz3.name = 'Future Research Executive';

        const expectedQuizzList: Quizz[] = [aQuizz1, aQuizz2, aQuizz3];
        const spyGetAllQuizz = spyOn(quizzService, 'getAllQuizz').and.returnValue(of(expectedQuizzList));

        // WHEN
        component.ngOnInit();

        // THEN
        expect(spyGetAllQuizz).toHaveBeenCalledTimes(1);
        return component.quizzs$.subscribe((quizzList: Quizz[]) => {
          expect(quizzList).toEqual(expectedQuizzList);
        });
      }))
    );
  });
});