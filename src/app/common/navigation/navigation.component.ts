import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  profileName:string="NOUFAL";

  // @Input() InputTest; 
  // or 
  @Input('InputTest') MyInputTestVar;

  //  @Output('outputTest') MyOuputTestVar = new EventEmitter();
  // or
  @Output('outputTest') MyOuputTestVar = new EventEmitter();

  constructor(private _el: ElementRef, private _renderer: Renderer2, private _data: DataService, private _router: Router) { }

  @HostListener('click') onClick() {
    // add a class to custom directive on mouse over
    this._renderer.addClass(this._el.nativeElement, 'active');
  }
  ngOnInit() {
    $('.navMain').autoHidingNavbar({
      showOnUpscroll: false,
      showOnBottom: true
    });

    $(".container-main-margin").css("margin-top", $(".navMain").height() + 16);

    console.log(this.MyInputTestVar, "input test");

    this.MyOuputTestVar.emit("Hello ,I am from navigation compo!");
  }
  // redirect to page url w.r.t value from nav 
  navigateUrl(_redirectUrl: any): void {
    this._router.navigateByUrl(_redirectUrl);
  }

}
