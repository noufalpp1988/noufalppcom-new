import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work-create',
  templateUrl: './work-create.component.html',
  styleUrls: ['./work-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkCreateComponent implements OnInit {

  work: any = {};

  constructor(private _http: HttpClient, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveWork() {
    this._http.post('/work', this.work)
      .subscribe(res => {
        let id = res['_id'];
        this._router.navigate(['/work-detail', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

  backButton() {
    this._router.navigate(['/works/']);
  }

}
