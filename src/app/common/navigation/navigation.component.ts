import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('.navMain').autoHidingNavbar({
      showOnUpscroll:false,
      showOnBottom:true
    });
    $(".container-main-margin").css("margin-top",$(".navMain").height()+16);
  }

}
