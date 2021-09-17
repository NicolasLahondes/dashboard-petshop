import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-display-chart',
  templateUrl: './display-chart.component.html',
  styleUrls: ['./display-chart.component.css'],
})
export class DisplayChartComponent implements OnInit {
  type: ChartType;
  labels: string[];
  datasets: ChartDataset[];
  options: ChartOptions;

  constructor() {
    this.type = 'doughnut';

    this.labels = ['Test', 'Test2', 'test3'];

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [20, 10, 5],
        backgroundColor: ['#2F5D62', '#5E8B7E', '#A7C4BC'],
      },
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    };
  }

  ngOnInit(): void {}
}
