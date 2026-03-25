import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularhook',
  templateUrl: './angularhook.component.html',
  styleUrls: ['./angularhook.component.css']
})
export class AngularhookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("angularhooks working");
  }

}
