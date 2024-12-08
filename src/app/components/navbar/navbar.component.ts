import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharingDataService } from '../../services/sharing-data.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() moviesList: Movie[] = [];

  search!: string;

  constructor(
    private sharindgDataService: SharingDataService
  ) { }

  searchEmit(){
    console.log(this.search)
    this.sharindgDataService.getSearchEventEmmiter().emit(this.search);
  }

  onShow(){
    console.log(this.moviesList)
    this.sharindgDataService.getShowListEventEmmiter().emit();
  }
 
}
