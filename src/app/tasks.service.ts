import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks = [{name: 'Зарядка', time: 0, value: '00:00:00', dead: ''}, {name: 'Учёба', time: 0, value: '00:00:00', dead: ''}, {name: 'Работа', time: 0, value: '00:00:00', dead: ''}];

    task$ = new BehaviorSubject(this.tasks);

    addTask(task: any) {
        this.tasks.push(task);
    }

    removeTask(id: number) {
        this.tasks.splice(id, 1);
    }
}