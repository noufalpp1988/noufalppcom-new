import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // to get url params
import { Router } from '@angular/router'; // to navigate to any component

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { // Instances created for ActivatedRoute, Router
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

 

}
