import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typesafety',
  templateUrl: './typesafety.component.html',
  styleUrls: ['./typesafety.component.css']
})
export class TypesafetyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  age:number=25;
  age="hello";

}
