import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { movieData } from '../data/movie.data';

@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {

  private movies: Movie[] = movieData;

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  } 

}
