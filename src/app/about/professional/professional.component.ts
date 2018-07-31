import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.changePageTitle('About/Professional');
  }
  backButtonFn() {
    this.router.navigate(['about']); // navigate to about component "paths given here and app-routing.module.ts should be same"
  }
  // function to test @output. pass value from child to parent

  outputTestMethod(emittedEvent: any) {
    console.log("Msg from child:", emittedEvent);
  }
}
