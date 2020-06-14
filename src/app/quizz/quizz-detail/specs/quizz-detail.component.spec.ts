import {async, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {QuizzDetailComponent} from '../quizz-detail.component';

describe('Quizz Detal Component', () => {
  let component: QuizzDetailComponent;
  let fixture;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [QuizzDetailComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(QuizzDetailComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));
  it('should create the QuizzDetailComponent', () => {
    expect(component).toBeTruthy();
  });
});