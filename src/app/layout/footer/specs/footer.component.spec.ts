import {async, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {FooterComponent} from '../..';

describe('Footer Component', () => {
  let component: FooterComponent;
  let fixture;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [FooterComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));
  it('should create the FooterComponent', () => {
    expect(component).toBeTruthy();
  });
});
