import {async, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {HeaderComponent} from '../..';

describe('Header Component', () => {
  let component: HeaderComponent;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [HeaderComponent]
    }).compileComponents();
    component = TestBed.createComponent(HeaderComponent);
  }));
  it('should create the HeaderComponent', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const headercmpnt = fixture.debugElement.componentInstance;
    expect(headercmpnt).toBeTruthy();
  });
});
