import { Component, OnInit, ViewChild } from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  tasks!: any;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private tasksS: TasksService) {
    this.tasksS.task$.subscribe(() => {
      console.log(this.tasks)
      this.setup();
    });
  }

  setup() {
    this.chartOptions = {
      series: this.tasksS.tasks.map((task: any) => task.time) as any,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: this.tasksS.tasks.map((task: any) => task.name) as any,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]}
  }

  isDead(a: any, b: any) {
    if (!a || !b) return;
    const aI = a.split(':');
    const bI = b.split(':');
    if (+aI[0] < +bI[0]) {
      return true;
    } else if (+aI[1] < +bI[1]) {
      return true;
    } else if (+aI[2] < +bI[2]) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.tasks = this.tasksS.tasks;

    this.setup();
  }

  removeTask(id: number) {
    this.tasksS.removeTask(id);
    this.setup();
  }

}
