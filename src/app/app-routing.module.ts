import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component';
import {PomodoroComponent} from './pomodoro/pomodoro.component';
import {StatsComponent} from './stats/stats.component';
import {DeadlineComponent} from './deadline/deadline.component';

const routes: Routes = [{
  path: 'stats', component: StatsComponent
}, {
  path: 'pomodoro', component: PomodoroComponent
}, {
  path: 'new', component: NewComponent
}, {
  path: 'deadline', component: DeadlineComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
