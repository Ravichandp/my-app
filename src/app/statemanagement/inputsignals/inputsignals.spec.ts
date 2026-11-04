import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inputsignals } from './inputsignals';

describe('Inputsignals', () => {
  let component: Inputsignals;
  let fixture: ComponentFixture<Inputsignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputsignals],
    }).compileComponents();

    fixture = TestBed.createComponent(Inputsignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
