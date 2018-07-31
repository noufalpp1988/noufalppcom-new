import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({  // component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  pageTitle: string;

  constructor(private _data: DataService) { //creating instances
  }
  ngOnInit() {
    this._data.currentPageTitle.subscribe(res => this.pageTitle = res);  // watching currentPageTitle and add to pageTitle when changes occurs
  }
  // function to test @output. pass value from child to parent

  outputTestMethod(emittedEvent: any) {
    console.log("Msg from Child:", emittedEvent);
  }
}
