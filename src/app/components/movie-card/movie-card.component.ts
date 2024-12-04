import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {

  @Input() movie!: Movie;

}
