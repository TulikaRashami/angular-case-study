import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scroll', [
      state('on', style({left: '-100px'})),
      transition('* => *', [
        style({left: '-100px'}),
        animate(10000, style({left: '100%'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  title = 'angular-case-study';
  state = 0;

  scrollDone() {
    this.state++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
