import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit,OnDestroy,OnChanges {


  title = 'mainApp';
  heading="Another heading"
  @Input() public shellMessage;


  constructor(private cd :ChangeDetectorRef) {



  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if(changes.shellMessage) {
      this.shellMessage= changes['shellMessage'].currentValue;
      this.cd.detectChanges();
    }
  }


  ngOnInit(): void {
  window.addEventListener('ce_subApp',this.customEventListenerFunction.bind(this),true);
  }


  customEventListenerFunction(event){
this.heading = event.detail.action;
this.cd.detectChanges();
  }
  ngOnDestroy(): void {
    window.removeEventListener('ce_subApp', this.customEventListenerFunction,true);
  }

}
