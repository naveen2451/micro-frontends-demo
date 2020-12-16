import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
  const sideApp = createCustomElement(AppComponent,{injector:this.injector});
  customElements.define('side-app',sideApp);

  }
}
