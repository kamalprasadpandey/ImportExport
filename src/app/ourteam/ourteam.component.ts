import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent implements OnInit {
//Slider settings
slideConfig = { autoplay: true, "slidesToShow": 1, "slidesToScroll": 1} ;
  constructor() { }

  ngOnInit(): void {
  }

}
