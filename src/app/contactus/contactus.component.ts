import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
//Slider settings
slideConfig = { autoplay: true, "slidesToShow": 1, "slidesToScroll": 1} ;
  constructor() { }

  ngOnInit(): void {
  }

}
