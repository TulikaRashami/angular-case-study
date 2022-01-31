import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map, of, take, timer } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.scss']
})
export class TimerInputComponent implements OnInit {
  counter$: Observable<number> = of(0);
  countDown:Subscription;
  timerList:any = [];
  timer:number =0;
  isTimerStarted: boolean;
  constructor() { }

  ngOnInit(): void {
    this.timer = 100;
  }

  startTimer(){
    console.log('I am called');
    if(this.isTimerStarted){
      this.isTimerStarted = true;
      this.countDown.unsubscribe();
      this.timerList.push(this.timer);
    }
    else{
      this.isTimerStarted = false;
      this.countDown = timer(0, 1000)
      .subscribe(() => --this.timer);
    }
   
  
    //console.log(this.countDown, this.countDown.closed )
  }

  stopTimer(){
    this.countDown.unsubscribe();
    this.timer = 0;
    this.timerList = [];
  }
}
