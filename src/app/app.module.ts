import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgApexchartsModule} from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { StatsComponent } from './stats/stats.component';
import { NewComponent } from './new/new.component';
import {TasksService} from './tasks.service';
import { DeadlineComponent } from './deadline/deadline.component';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    StatsComponent,
    NewComponent,
    DeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
