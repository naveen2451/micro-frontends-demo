import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExternalThanksService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) return;
    const script = document.createElement('script');
    script.src = 'assets/apps/contactUsApp/elements/contactUsApp-elements-es2015.js';
    document.body.appendChild(script);
    this.loaded = true;
  }
}
