import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule {
    /**
   *
   */
  constructor( private injector: Injector) {
    // console.log('hi')
  }

  ngDoBootstrap()
{
const mainApp = createCustomElement(AppComponent,{injector:this.injector});
customElements.define('main-app',mainApp);

}
}
