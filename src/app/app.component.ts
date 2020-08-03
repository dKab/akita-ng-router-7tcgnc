import { Component, OnInit } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  routerQueryParams$;

  constructor(
    private routerQuery: RouterQuery
  ) {}

  public ngOnInit() {
    this.routerQueryParams$ = this.routerQuery.selectParams();
  }
}
