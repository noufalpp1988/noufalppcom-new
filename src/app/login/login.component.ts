import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // to get url params
import { Router } from '@angular/router'; // to navigate to any component
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pageTitle: String;
  constructor(private _route: ActivatedRoute, private _router: Router, private _data: DataService, private _http: HttpClient, private _el: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    //this.route.params.subscribe(res => console.log(res.id));
    this._renderer.addClass(document.body, "login-page");
    this._data.changePageTitle("Works");     // setting value for pageTitle
    this._data.currentPageTitle.subscribe(res => this.pageTitle = res); // subscribe 'currentPageTitle' as watchable and when assigns the response to 'message' when value changes

  }

  outputTestMethod(emittedEvent: any) {
    console.log("Msg from child:", emittedEvent);
  }

  ngOnDestroy() {
    this._renderer.removeClass(document.body, "login-page");
  }
}
