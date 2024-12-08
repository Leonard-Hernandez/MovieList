import { EventEmitter, Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private searchEventEmmiter: EventEmitter<string> = new EventEmitter();
  private listMovieEventEmmiter: EventEmitter<Movie> = new EventEmitter();
  private onShowListEventEmmiter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getSearchEventEmmiter(): EventEmitter<string> {
    return this.searchEventEmmiter;
  }

  getCartEventEmmiter(): EventEmitter<Movie> {
    return this.listMovieEventEmmiter;
  }

  getShowListEventEmmiter(): EventEmitter<any> {
    return this.onShowListEventEmmiter;
  }
  
}
