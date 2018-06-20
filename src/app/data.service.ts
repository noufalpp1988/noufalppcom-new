import { Injectable } from '@angular/core';
 import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pageTitleSource = new BehaviorSubject<string>('homedefault'); // adding behavior to pageTitleSource
  currentPageTitle = this.pageTitleSource.asObservable();  // observe pageTitleSource and assigns to currentPage which is watched by subscribe
  
  constructor() { }

  changePageTitle(pageTitle: string) {   // triggers whenever 'changePageTitle' fn calls 
    this.pageTitleSource.next(pageTitle);   // passing pageTitleSource value into pageTitle
  }
}
