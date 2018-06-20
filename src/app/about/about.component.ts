import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // to get url params
import { Router } from '@angular/router'; // to navigate to any component
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle: string;
  constructor(private route: ActivatedRoute, private router:Router,private data: DataService) { // Instances created for ActivatedRoute, Router
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.data.currentPageTitle.subscribe(res => this.pageTitle = res); // subscribe 'currentPageTitle' as watchable and when assigns the response to 'message' when value changes
    this.data.changePageTitle("about"); // setting value for pageTitle
  }

}
