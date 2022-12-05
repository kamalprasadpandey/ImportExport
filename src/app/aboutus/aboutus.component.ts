import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
//Slider settings
slideConfig = { autoplay: true, "slidesToShow": 1, "slidesToScroll": 1} ;
  constructor() { }

  ngOnInit(): void {
  }

}
