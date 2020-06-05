describe('Quizz Detail Component', () => {
  it('should write test for the component', () => {
    // TODO : Write the test
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {QuizzDetailComponent} from '../quizz-detail.component';

describe('Header Component', () => {
  let fixture: ComponentFixture<QuizzDetailComponent>;
  let component: QuizzDetailComponent;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [QuizzDetailComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(QuizzDetailComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  }));
  it('should create the QuizzDetailComponent', () => {
    expect(component).toBeTruthy();
  });
});
