import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSnackStepComponent } from './movie-snack-step.component';

describe('MovieSnackStepComponent', () => {
  let component: MovieSnackStepComponent;
  let fixture: ComponentFixture<MovieSnackStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieSnackStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSnackStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
