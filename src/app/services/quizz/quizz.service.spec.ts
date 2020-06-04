import { TestBed } from '@angular/core/testing';
import { QuizzService } from './quizz.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('QuizzService', () => {
  let service: QuizzService;
  let httpestingCntrl: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [QuizzService]
  }));

  service = TestBed.get(QuizzService);
  httpestingCntrl = TestBed.get(HttpTestingController);

  it('should be able to retrieve quizzs from the API by GET methode', () => { 
    const service: QuizzService = TestBed.get(QuizzService);
    expect(service).toBeTruthy();
  });
  it('be able to retrieve quizzs from the API bia GET', () => {
    const dummyQuizzs: SingleQuizz[] = [
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

    const request = httpestingCntrl.expectOne( `${service.baseUrl}/quizzs`);
      expect(request.request.method).toBe('GET');
      request.flush(dummyQuizzs);
    });
    afterEach(() => {
      httpestingCntrl.verify();
  });
});


// this.http.get('url')