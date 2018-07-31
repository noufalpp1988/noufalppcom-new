import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // to get url params
import { Router } from '@angular/router'; // to navigate to any component
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: any;    // array for works
  work: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService, private _http: HttpClient) {

  }

  ngOnInit() {
    //this.route.params.subscribe(res => console.log(res.id));
    //this._data.changePageTitle('Works');
    this._http.get('/work').subscribe(data => {
      this.works = data;
    });

  }
  // function to test @output. pass value from child to parent

  outputTestMethod(emittedEvent: any) {
    console.log("Msg from child:", emittedEvent);
  }

}
