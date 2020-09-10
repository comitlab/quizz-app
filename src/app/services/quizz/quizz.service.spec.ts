import { TestBed } from '@angular/core/testing';
import { QuizzService } from './quizz.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Quizz } from '../models/quizz.model';
import { Question } from '../models/question.model';
import { AppTestModule } from '../../app-test.module';

describe('QuizzService', () => {
  let service: QuizzService;
  let httpMock: HttpTestingController;
  const baseUrl = environment.apiUrl + '/quizz';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      providers: [QuizzService]
    });
    service = TestBed.get(QuizzService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
  describe('getAllQuizz', () => {
    it('should get quizzs list from server', (done) => {
      // GIVEN
      const dummyQuizzs: Quizz[] = [
        {
          name: 'Central Tactics Developer',
          _id: '5f3186351f02643e88e11d66',
          questions : 
        }, {
          name: 'Forward Solutions Director',
          _id: '5f3186351f02643e88e11d65',
          questions : 
        }, {
          name: 'Future Research Executive',
          _id: '5f3186351f02643e88e11d67',
          questions : 
        }
      ];
      const expectedResponse = {
        data: dummyQuizzs
      };

      // WHEN
      service.getAllQuizz()
        .subscribe(quizz => {
        expect(requestMock.request.method).toBe('GET');
        expect(quizz).toEqual(dummyQuizzs);
        done();
      });

      const requestMock = httpMock.expectOne( `${baseUrl}`);
      requestMock.flush(expectedResponse);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

});
