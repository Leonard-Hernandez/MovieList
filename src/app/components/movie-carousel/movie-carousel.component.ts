import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-carousel',
  standalone: true,
  imports: [],
  templateUrl: './movie-carousel.component.html'
})
export class MovieCarouselComponent {

  @Input() movies: Movie[] = [];

}
