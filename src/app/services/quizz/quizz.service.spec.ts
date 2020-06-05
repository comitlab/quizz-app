import { TestBed } from '@angular/core/testing';
import { QuizzService } from './quizz.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { QUIZZ } from '../models/quizz.model';

describe('QuizzService', () => {
  let service: QuizzService;
  let httpMock: HttpTestingController;
  let baseUrl = environment.apiUrl + '/quizz';
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule],
    providers: [QuizzService]
  }));

  service = TestBed.get(QuizzService);
  httpMock = TestBed.get(HttpTestingController);

  it('should be able to retrieve quizzs from the API by GET methode', () => {
    const service: QuizzService = TestBed.get(QuizzService);
    expect(service).toBeTruthy();
  });
  it('should get quizzs', () => {
    const dummyQuizzs: QUIZZ[] = [
      {
        name: "Quizz 1",
      },
      {
        name: "Quizz 2",
      },
      {
        name: "Quizz 3",
      }
    ];
  service.getAllQuizz().subscribe(quizzs => {
      expect(quizzs.length).toBe(2);
      expect(quizzs).toEqual(dummyQuizzs);
  });

  const request = httpMock.expectOne( `${baseUrl}/quizzs`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyQuizzs);
  });

  afterEach(() => {
    httpMock.verify();
  });
  
});