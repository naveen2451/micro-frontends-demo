import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subApp';
  counter=0;
  messageList =['Hey Sub App Thanks for message 1',
                'Hey Sub App Thanks for message 2',
                'Hey Sub App Thanks for message 3'];
  @Input() public shellMessage='';

  ce_changeHead(){
    if(this.counter > 2 ) {
      this.counter =0;
    }


    const data = {
      action: this.messageList[this.counter]
    }
    // could handle multiple ways just focussed on simple communication
    const event = new CustomEvent('ce_subApp',{detail:data});
    console.log(event)
    window.dispatchEvent(event);
    this.counter++;
  }
}
