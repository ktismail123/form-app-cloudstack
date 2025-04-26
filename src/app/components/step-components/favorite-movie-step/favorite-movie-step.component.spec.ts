import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMovieStepComponent } from './favorite-movie-step.component';

describe('FavoriteMovieStepComponent', () => {
  let component: FavoriteMovieStepComponent;
  let fixture: ComponentFixture<FavoriteMovieStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMovieStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMovieStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
