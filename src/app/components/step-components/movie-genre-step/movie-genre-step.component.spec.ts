import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreStepComponent } from './movie-genre-step.component';

describe('MovieGenreStepComponent', () => {
  let component: MovieGenreStepComponent;
  let fixture: ComponentFixture<MovieGenreStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieGenreStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGenreStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
