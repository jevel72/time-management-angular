import { Component } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})
export class DeadlineComponent {
  time = '';
  invalid = false;
  value!: any;
  tasks!: any;
  constructor(private t: TasksService) {}
  ngOnInit() {
    this.tasks = this.t.tasks;
    this.value = this.t.tasks[0];
  }
  setTime(t: string): void {
    this.time = '';
    this.invalid = !/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/.test(t);
    if (this.invalid === false) {
      if (this.t.tasks.find(t => t.name === this.value.name)) {
        (this.t.tasks.find(t => t.name === this.value.name) as any).dead = t;
      }
    }
  }
  setCurrentTask(v: string) {
    this.value = v;
  }
}
