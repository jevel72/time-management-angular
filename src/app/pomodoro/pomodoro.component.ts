import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  constructor() { }
  timer!: any;

  timer2!: any;
  date1!: any;
  date2!: any;

  warningText!: string | null;

  ourdata!: string;

  ngOnInit(): void {
  }

  isStarted: boolean = false;

  get text(): string {
    if (this.isStarted === false) {
      return 'Старт';
    } else {
      return this.ourdata || 'Загружаем данные...';
    }
  }

  start() {
    if (!this.isStarted) {
      this.timer = setTimeout(() => {
        clearTimeout(this.timer);
        this.timer = null;
        this.isStarted = false;
        this.warningText = 'Подождите 5 минут и продолжайте работу.';
        setTimeout(() => {
          this.warningText = null;
        }, 5 * 1000 * 60);
      }, 25 * 1000 * 60);

      this.date1 = new Date();
      this.date2 = new Date();
      this.date2.setMinutes(this.date2.getMinutes() + 25);

      this.isStarted = true;

      this.timer2 = setInterval(() => {
        this.date1 = new Date();
        let data = new Date(0);
        data.setSeconds((this.date2.getTime() - this.date1.getTime()) / 1000);

        this.ourdata = data.toISOString().substr(14, 5);
      }, 1000);
    }
  }

}
