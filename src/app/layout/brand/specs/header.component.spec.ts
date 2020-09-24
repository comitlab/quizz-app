import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppTestModule} from '../../../app-test.module';
import {BrandComponent} from '../..';

describe('Brand Component', () => {
  let fixture: ComponentFixture<BrandComponent>;
  let component: BrandComponent;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [BrandComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(BrandComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  }));
  it('should create the BrandComponent', () => {
    expect(component).toBeTruthy();
  });
});
