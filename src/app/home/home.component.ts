import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle: string;
  homeBtnValue: string = 'View Profile';
  homeBtnSeeWorks: string = 'See Works';
  AuthorName: string = 'Name';
  AuthorSurname: string = 'Surname';

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.currentPageTitle.subscribe(res => this.pageTitle = res); // subscribe 'currentPageTitle' as watchable and when assigns the response to 'message' when value changes
    this.data.changePageTitle("home"); // setting value for pageTitle

    // $('button').on("click",function(){
    //   alert();
    // });
  }

}
