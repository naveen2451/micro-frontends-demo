import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCommentCardComponent } from './lazy-comment-card.component';
import { createCustomElement } from '@angular/elements';




@NgModule({
  declarations: [LazyCommentCardComponent],
  imports: [
    CommonModule
  ],
  entryComponents:[LazyCommentCardComponent]
})
export class LazyCommentCardModule {

  constructor(private injector: Injector) {
    const lazyTileCE = createCustomElement(LazyCommentCardComponent, { injector: this.injector });
    customElements.define('lazy-dashboard-tile', lazyTileCE);
  }

 }
