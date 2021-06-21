import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks!: any;

    task$!: any;

    constructor() {
        if (localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks') as any);
        } else {
            this.tasks = [{name: 'Зарядка', time: 0, value: '00:00:00', dead: ''}, {name: 'Учёба', time: 0, value: '00:00:00', dead: ''}, {name: 'Работа', time: 0, value: '00:00:00', dead: ''}];
        }

        this.task$ = new BehaviorSubject(this.tasks);
    }

    addTask(task: any) {
        this.tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    removeTask(id: number) {
        this.tasks.splice(id, 1);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}