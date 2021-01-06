import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GoogleResponse } from 'src/app/response/response.module';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  results: any;
  subs: Subscription[] = [];
  word: string;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.word = this.route.snapshot.params['word'];
  }

  //raise an event in home and send it here  rather than the porn word

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.word = params['word'];
    });


    if (this.word) {
      this.subs.push(
        this.searchService
          .getSearchData(this.word)
          .subscribe((data: GoogleResponse) => {
            this.results = data;
          })
      );
    }
  }
}

/// fix the params with the search
