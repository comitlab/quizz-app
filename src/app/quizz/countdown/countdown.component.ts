import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iam-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() init: number = null;
  public counter:number = 0;

  ngOnInit(): void{
    this.startCountDown();
  }

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
    console.log("count is", this.counter);
  
    if(this.counter == 0) { 
      console.log("--counter end--");
    }
    else {
      this.doCountDown();
    }
  }

  getColor() {
    if(this.counter > 2) {
      return 'green';
    } else if(this.counter <= 2) {
      return 'red';
    }
  }

}
