import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  search!: string;

  constructor(
    private sharindgDataService: SharingDataService
  ) { }

  searchEmit(){
    console.log(this.search)
    this.sharindgDataService.getSearchEventEmmiter().emit(this.search);
  }
 
}
