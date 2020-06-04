import {async, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {FooterComponent} from '../..';

describe('Footer Component', () => {
  let component: FooterComponent;
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [FooterComponent]
    }).compileComponents();
    component = TestBed.createComponent(FooterComponent);
  }));
  it('should create the FooterComponent', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const Footercmpnt = fixture.debugElement.componentInstance;
    expect(Footercmpnt).toBeTruthy();
  });
  it('should render get footer infos in a p element', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('From footer');
  });
});
