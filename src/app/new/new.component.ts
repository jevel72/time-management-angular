import { Component } from '@angular/core';

import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  
  newName!: string;

  constructor(private tasksS: TasksService) { }

  saveNew() {
    this.tasksS.addTask({
      name: this.newName,
      time: 0,
      value: '00:00'
    });
  }
}
