import { Component, ViewEncapsulation } from '@angular/core';
import {Title} from '@angular/platform-browser';

import {TasksService} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public currentTask!: any;
  public tasks!: any;
  public isStart: boolean = true;
  get getStartButtonStatus(): string {
    return this.isStart ? 'Начать' : '| |';
  }

  timer!: any;

  constructor(private title: Title, private tasksService: TasksService) {
    this.title.setTitle('Time Management App');
  }

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
    this.currentTask = (this.tasks as object[])[0];
  }

  public setCurrentTask(task: any): void {
    this.currentTask = this.tasks.find(((t: any) => t.name === task));
  }

  startTime() {
    if (!this.isStart) {
      this.timer = new Date();
    } else {
      this.currentTask.time += Math.floor((new Date().getTime() - this.timer.getTime()) / 1000);
      let data = new Date(0);
      data.setSeconds(this.currentTask.time);
      this.currentTask.value = data.toISOString().substr(11, 8);
      this.tasksService.task$.next(this.tasks);
    }
  }

}
