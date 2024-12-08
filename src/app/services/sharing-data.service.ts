import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private searchEventEmmiter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  getSearchEventEmmiter(): EventEmitter<string> {
    return this.searchEventEmmiter;
  }
}
