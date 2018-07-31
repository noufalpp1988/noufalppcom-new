import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // to get url params
import { Router } from '@angular/router'; // to navigate to any component
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle: string;

  public authorFullImagePath1:string='assets/images/aboutImage.jpg';
  public aboutProfessionalImg: string= "assets/images/professional-image.png";
  public aboutPersonalImg: string= "assets/images/personal-image.png";

  constructor(private _route: ActivatedRoute, private _router: Router, private _data: DataService, private _el: ElementRef, private _renderer: Renderer2) { // Instances created for ActivatedRoute, Router
    this._route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._renderer.addClass(document.body, "about-page");
    this._data.changePageTitle("About");     // setting value for pageTitle
    this._data.currentPageTitle.subscribe(res => this.pageTitle = res); // subscribe 'currentPageTitle' as watchable and when assigns the response to 'message' when value changes

  }

  ngOnDestroy() {
    this._renderer.removeClass(document.body, "about-page");
  }
    // function to test @output. pass value from child to parent

    outputTestMethod(emittedEvent: any) {
      console.log("Msg from child:", emittedEvent);
    }

}
