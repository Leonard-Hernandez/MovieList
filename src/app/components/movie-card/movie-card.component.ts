import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent {

  @Input() movie!: Movie;

  constructor(
    private sharindgDataService: SharingDataService
  ) { }

  onList() {
    this.sharindgDataService.getCartEventEmmiter().emit(this.movie);
  }

}
