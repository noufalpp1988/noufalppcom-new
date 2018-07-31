import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None  // sets whether this styles affect other components or not

})

export class HomeComponent implements OnInit {
  pageTitle: string;
  homeBtnProfile: string = 'Know more about me';
  homeBtnSeeWorks: string = 'See My Works';
  AuthorName: string = 'Noufal PP';
  AuthorSurname: string = '{{Full Stack Developer}}';

  constructor(private _data: DataService, private _router: Router, private _el: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    // adding class to body tag
    this._renderer.addClass(document.body, 'home-page');

    // subscribe 'currentPageTitle' as watchable and when assigns the response to 'message' when value changes
    this._data.currentPageTitle.subscribe(res => this.pageTitle = res);
    this._data.changePageTitle("Home"); // setting value for pageTitle

  }

  navigateUrlFn(_path): void {     // receives whole element as arg
    if (_path.name == 'homeProfileLink') {
      this.homeBtnProfile = "Loading....";

    } else if (_path.name == 'homeWorksLink') {
      this.homeBtnSeeWorks = "Loading....";

    }
    setTimeout(() => {
      this._router.navigateByUrl(_path.value);

    }, 500);
  }

  ngOnDestroy() {
    this._renderer.removeClass(document.body, 'home-page');

  }
}
