import {async, TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {QuizzDetailComponent} from '../quizz-detail.component';
import {QuizzService} from '../../../services/quizz/quizz.service';
import {Quizz} from '../../../services/models/quizz.model';
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
        const aQuizz1 = new  Quizz();
        const aQuizz2 = new  Quizz();
        const aQuizz3 = new  Quizz();
        aQuizz1._id = '1';
        aQuizz2._id = '2';
        aQuizz3._id = '3';
      //  const _id = aQuizz1._id;

        const expectedGetOneSingleQuizz: Quizz[] = [aQuizz1, aQuizz2, aQuizz3];
        const spyGetOneQuizz = spyOn(quizzService, 'getSingleQuizz').and.returnValue(of(expectedGetOneSingleQuizz));

        // WHEN
        component.ngOnInit();

        // THEN
        expect(spyGetOneQuizz).toHaveBeenCalledTimes(1);
        return component.quizz$.subscribe((quizzDatails: Quizz["_id: 1"]) => {
          expect(quizzDatails).toEqual(expectedGetOneSingleQuizz);
        });
      }))
    );
  });
});


