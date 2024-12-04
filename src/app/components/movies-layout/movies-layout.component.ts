import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'movies-layout',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies-layout.component.html'
})
export class MoviesLayoutComponent {

  @Input() movies!: Movie[];

}
