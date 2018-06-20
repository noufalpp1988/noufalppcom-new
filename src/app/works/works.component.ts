import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // to get url params
import { Router } from '@angular/router'; // to navigate to any component

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    //this.route.params.subscribe(res => console.log(res.id));
  }

}
