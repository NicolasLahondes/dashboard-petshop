import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-number',
  templateUrl: './display-number.component.html',
  styleUrls: ['./display-number.component.css']
})
export class DisplayNumberComponent implements OnInit {

@Input() numberToDown: number;

  constructor() { }

  ngOnInit(): void {
  }

}
