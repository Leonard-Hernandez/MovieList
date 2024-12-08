import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'list-modal',
  standalone: true,
  imports: [],
  templateUrl: './list-modal.component.html'
})
export class ListModalComponent implements OnInit {

  show: boolean = true;

  @Input() moviesList: Movie[] = [];

  constructor(
    private sharindgDataService: SharingDataService
  ) { }

  ngOnInit(): void {
    this.onShowEmit();
  }

  onShow() {
    this.show = !this.show;
  }

  onShowEmit() {
    this.sharindgDataService.getShowListEventEmmiter().subscribe(() => {
      this.onShow();
    })
  }

}
