import { TestBed } from '@angular/core/testing';
import { QuizzService } from './quizz.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Quizz } from '../models/quizz.model';
import {AppTestModule} from '../../app-test.module';

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
          name: 'Quizz 1',
          _id: '5ebaec01df815b45b8ad7bdc'
        },
        {
          name: 'Quizz 2',
          _id: '5ebaec01df815b45b8ad7bdd'
        },
        {
          name: 'Quizz 3',
          _id: '5ebaec01df815b45b8ad7bde'
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

      const requestMock = httpMock.expectOne( `${baseUrl}/all`);
      requestMock.flush(expectedResponse);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

});
