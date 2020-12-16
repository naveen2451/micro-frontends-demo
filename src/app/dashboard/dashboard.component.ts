import { Component, OnInit } from '@angular/core';
import { ExternalThanksService } from './external-thanks.service';
import { LazyloadCommentService } from './lazyloadcomment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private lazyService: LazyloadCommentService,
    private externalService: ExternalThanksService
  ) { }

  ngOnInit() {
  }



onLazy(): void {
    this.lazyService.load().then(_ => {
      this.add('lazy-dashboard-tile');
    });
  }

  onDynamic(): void {
    this.externalService.load();
    this.add('contactus-app');
  }

  add(tileKind: string): void {



    const tile = document.createElement(tileKind);
    tile.setAttribute('class', 'col-lg-4 col-md-3 col-sm-2');

    const content = document.getElementById('content');
    content.appendChild(tile);

  }

}
