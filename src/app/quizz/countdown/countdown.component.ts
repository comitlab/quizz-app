import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iam-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  ngOnInit(): void{
    this.startCountDown();
  }

  
  @Input() init: number = null;
  public counter:number = 0;

  constructor() { }

  startCountDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    setTimeout(() =>{
    this.counter = this.counter -1;
    this.processCountdown();
    }, 1000)
  }

  processCountdown() {
    // emit event COUNT DOWN
    console.log("count is", this.counter);

    if(this.counter == 0) {
      // emit event COUNT END  
      console.log("--counter end--");
    }
    else {
      this.doCountDown();
    }
  }

}
