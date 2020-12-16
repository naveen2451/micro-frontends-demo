import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'micro-frontend-shell';
  userMessage='0.00';


constructor(

  ) {



}
  onClick(){
    this.userMessage=  Math.random().toFixed(2);
  }
}
