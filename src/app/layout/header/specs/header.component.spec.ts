import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {HeaderComponent} from '../..';

describe('Header Component', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [HeaderComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  }));
  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });
});
