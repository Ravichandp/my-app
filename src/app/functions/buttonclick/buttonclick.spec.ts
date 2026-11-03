import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Buttonclick } from './buttonclick';

describe('Buttonclick', () => {
  let component: Buttonclick;
  let fixture: ComponentFixture<Buttonclick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonclick],
    }).compileComponents();

    fixture = TestBed.createComponent(Buttonclick);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
