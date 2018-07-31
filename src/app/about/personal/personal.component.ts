import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  public authorFullImagePath1: string = 'assets/images/aboutImage.jpg';

  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.changePageTitle('About/Personal');
  }
  backButtonFn() {
    this.router.navigate(['about']); // navigate to about component "paths given here and app-routing.module.ts should be same"
  }

  // function to test @output. pass value from child to parent

  outputTestMethod(emittedEvent: any) {
    console.log("Msg from child:", emittedEvent);
  }

}
