import { Component, OnInit } from '@angular/core';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(
    private routerQuery: RouterQuery,
    private router: Router
  ) { }

  ngOnInit() {
    this.routerQuery.selectQueryParams().subscribe(params => {
      this.router.navigate([`/b`], {
      queryParams: {
        foo: 'bar',
        // FIXME: probably should be handled in sail dashboard
        baz: this.routerQuery.getQueryParams('baz')
      },
      replaceUrl: true
      });
    });
  }
}