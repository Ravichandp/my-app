import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Switchcase } from './switchcase';

describe('Switchcase', () => {
  let component: Switchcase;
  let fixture: ComponentFixture<Switchcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchcase],
    }).compileComponents();

    fixture = TestBed.createComponent(Switchcase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
