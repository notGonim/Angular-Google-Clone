import { ControlContainer, NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }], // To pass data from custom element to parent
})
export class SearchComponent implements OnInit {
  @Input('currentTermValue') currentTermValue: any;
  @Input('iconRight') iconRight: any;

  constructor() {
  }

  ngOnInit(): void {}

}
