import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import { MainComponent} from '../main.component';
import {FooterComponent, HeaderComponent} from '../..';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, HeaderComponent, FooterComponent],
      imports: [
        AppTestModule,
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MainComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
      });
  }));
  it('should create the MainComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should have application title', () => {
    // TODO : Test Title
    expect(true).toBeTruthy();
  });
});
