import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counterstore } from './counterstore';

describe('Counterstore', () => {
  let component: Counterstore;
  let fixture: ComponentFixture<Counterstore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterstore],
    }).compileComponents();

    fixture = TestBed.createComponent(Counterstore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
