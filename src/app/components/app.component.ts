import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieServicesService } from '../services/movie-services.service';
import { MoviesLayoutComponent } from './movies-layout/movies-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoviesLayoutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  movies: Movie[] = [];

  constructor(private movieService: MovieServicesService){

  }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    console.log(this.movies)
  }
  


}
