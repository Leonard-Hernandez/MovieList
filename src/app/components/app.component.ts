import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieServicesService } from '../services/movie-services.service';
import { MoviesLayoutComponent } from './movies-layout/movies-layout.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';
import Swal from 'sweetalert2';
import { ListModalComponent } from './list-modal/list-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, MovieCarouselComponent, MoviesLayoutComponent, ListModalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  movies: Movie[] = [];

  moviesList: Movie[] = [];

  constructor(private movieService: MovieServicesService, private sharindgDataService: SharingDataService) {

  }

  ngOnInit(): void {
    if (this.movies.length === 0) {
      this.movies = this.movieService.getMovies();
    }
    console.log(this.movies)
    this.onSerch();
    this.onList();
  }

  onSerch() {
    this.sharindgDataService.getSearchEventEmmiter().subscribe((search: string) => {
      console.log(search)
      this.movies = this.movieService.getMovies().filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
      console.log(this.movies)
    })
  }

  onList(){
    this.sharindgDataService.getCartEventEmmiter().subscribe((movie: Movie) => {
      Swal.fire({
        title: "Good job!",
        text: "You add the movie to the list",
        icon: "success"
      });
      this.moviesList.push(movie);
    })
  }

}
