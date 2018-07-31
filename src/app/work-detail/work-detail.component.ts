import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WorkDetailComponent implements OnInit {

  work: any = {};

  constructor(private _router: Router, private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit() {
    this.getWorkDetail(this._route.snapshot.params['id']);
  }

  getWorkDetail(id) {
    this._http.get('/work/' + id).subscribe(data => {
      this.work = data;
    });
  }
  deleteWork(id) {
    this._http.delete('/work/' + id)
      .subscribe(res => {
        this._router.navigate(['/works']);
      }, (err) => {
        console.log(err);
      }
      );
  }

  backToWorks() {
    this._router.navigate(['/works']);
  }


}
