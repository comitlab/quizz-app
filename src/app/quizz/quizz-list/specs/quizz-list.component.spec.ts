import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {QuizzListComponent} from '../quizz-list.component';
import {QuizzService} from '../../../services/quizz/quizz.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { Component } from '@angular/core';

describe('Quizz List Component', () => {
  let component: QuizzListComponent;
  let fixture: ComponentFixture<QuizzListComponent>;
  let service: QuizzService;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [QuizzListComponent],
      imports: [
        AppTestModule, 
        RouterModule,
        CommonModule
      ]
    }).compileComponents();
   // component = TestBed.createComponent(QuizzListComponent);
  }));
  it('should create the QuizzListComponent', () => {
    const fixture = TestBed.createComponent(QuizzListComponent);
    const quizzListCmpnt = fixture.debugElement.componentInstance;
    expect(quizzListCmpnt).toBeTruthy();
  });
  it('should get all quizzs', () => {
    const fixture = TestBed.createComponent(QuizzListComponent);
    const quizzList = fixture.debugElement.componentInstance;
    expect(quizzList.quizz).toEqual(quizzList.quizz);
  });
  it('should render Quizz name in a ul list', () => {
    const fixture = TestBed.createComponent(QuizzListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const quizzList = fixture.debugElement.componentInstance;
    expect(compiled.querySelector('ul').textContent).toContain(quizzList.quizz.name);
  });
});
