import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import { MainComponent} from '../main.component';
import {QuizzService} from '../../../services/quizz/quizz.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Title } from '@angular/platform-browser';

// import { Component } from '@angular/core';

describe('Quizz List Component', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let service: QuizzService;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        AppTestModule, 
        RouterModule,
        CommonModule,
        RouterTestingModule
      ]
    }).compileComponents();
  //  component = TestBed.createComponent(MainComponent);
  }));
  it('should create the MainComponent', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const mainCmpnt = fixture.debugElement.componentInstance;
    expect(mainCmpnt).toBeTruthy();
  });
  it('should have application title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const mainCmpnt = fixture.debugElement.componentInstance;
    expect(mainCmpnt.title).toEqual('Quizz');
  });
});
