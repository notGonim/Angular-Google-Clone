import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  search(form: NgForm): void {
    console.log(form.value.Search_term);
    this.router.navigate([
      '/results',
      form.value.Search_term,
      { queryParams: { word: form.value.Search_term } },
    ]);
  }
}
