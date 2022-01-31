import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerHistoryComponent } from './timer-history/timer-history.component';
import { ButtonCountComponent } from './button-count/button-count.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimerDisplayComponent,
    TimerInputComponent,
    TimerHistoryComponent,
    ButtonCountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
