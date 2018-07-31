import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DataService } from '../../data.service';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private _el: ElementRef, private _render: Renderer2, private _data: DataService) { }

  ngOnInit() {
  }

}
