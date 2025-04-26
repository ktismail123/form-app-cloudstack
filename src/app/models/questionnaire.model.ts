// src/app/models/questionnaire.model.ts

export interface FavoriteMovie {
    title: string;
    year: string;
  }
  
  export interface QuestionnaireData {
    movieGenres?: string[];
    angularExperience?: string;
    favoriteMovies?: FavoriteMovie[];
    movieSnack?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  }
  
  export enum StepEnum {
    MOVIE_GENRE = 1,
    ANGULAR_EXPERIENCE = 2,
    FAVORITE_MOVIE = 3,
    MOVIE_SNACK = 4,
    ADDRESS = 5
  }