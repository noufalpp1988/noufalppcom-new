import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkEditComponent implements OnInit {

  work: any = {};
  updated_date: any;

  constructor(private _http: HttpClient, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getWork(this._route.snapshot.params['id']);
  }
  getWork(id) {
    console.log(id);
    this._http.get('/work/' + id).subscribe(data => {
      this.work = data;
    });
  }
  updateWork(id) {
    this.work.updated_date = Date.now();
    this._http.put('/work/' + id, this.work)
      .subscribe(res => {
        let id = res['_id'];
        this._router.navigate(['/work-detail', id]);
      }, (err) => {
        console.log(err);
      }
      );
  }

  backButton() {
    this._router.navigate(['/work-detail/', this._route.snapshot.params['id']]);
  }


}
