import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.changePageTitle('Works/Projects');
  }
  backButtonFn() {
    this.router.navigate(['works']); // navigate to works component "paths given here and app-routing.module.ts should be same"
  }
  // function to test @output. pass value from child to parent

  outputTestMethod(emittedEvent: any) {
    console.log("Msg from child:", emittedEvent);
  }

}
