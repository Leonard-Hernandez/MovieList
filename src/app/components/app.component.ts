import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieServicesService } from '../services/movie-services.service';
import { MoviesLayoutComponent } from './movies-layout/movies-layout.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieCarouselComponent, MoviesLayoutComponent],
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
