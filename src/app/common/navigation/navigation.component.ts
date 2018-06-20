import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // @Input() InputTest; 
  // or 
  @Input('InputTest') MyInputTestVar;

  //  @Output('outputTest') MyOuputTestVar = new EventEmitter();
  // or
  @Output('outputTest') MyOuputTestVar = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $('.navMain').autoHidingNavbar({
      showOnUpscroll: false,
      showOnBottom: true
    });
    $(".container-main-margin").css("margin-top", $(".navMain").height() + 16);

    console.log(this.MyInputTestVar, "input test");
    
    this.MyOuputTestVar.emit("Hello ,I am from child compo!");
  }

}
