import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerInputComponent } from './timer-input/timer-input.component';

const routes: Routes = [
  {path:'', component: TimerInputComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule { }
