import { Component, OnInit,ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import data from '../Data_json/Health Advisor/kolkata.json';
import dataHowrah from '../Data_json/Health Advisor/Howrah.json';
import dataNp from '../Data_json/Health Advisor/N24.json';
import dataHoog from '../Data_json/Health Advisor/Hoogly.json';
import dataPmed from '../Data_json/Health Advisor/PMed.json';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  // tslint:disable-next-line: max-line-length
  private kolkata = data;
  private howrah = dataHowrah;
  private Np = dataNp;
  private Hoog = dataHoog;
  private Pmed = dataPmed;
  @ViewChild('barChart') barChart;
  @ViewChild('barChart1') barChart1;
  @ViewChild('barChart2') barChart2;

  bars: any;
  colorArray: any;
  lineChart: any;
  tac: string;
  cac: string;
  sac: string;
  date: string[] = [];
  active: number[] = [];
  dateHowrah: string[] = [];
  activeHowrah: number[] = [];
  activeNp: number[] = [];
  activeHoog: number[] = [];
  activePmed: number[] = [];
  severe: number[] = [];
  sHowrah: number[] = [];
  sNp: number[] = [];
  sHoog: number[] = [];
  sPmed: number[] = [];
  c: number[] = [];
  cHowrah: number[] = [];
  cNp: number[] = [];
  cHoog: number[] = [];
  cPmed: number[] = [];

  constructor() {}

  ionViewDidEnter() {
    this.createBarChart();
    this.kolkata.forEach(x => {
      this.date.push(x.Date);
      this.active.push(x.Active);
      this.severe.push(x.severe);
      this.c.push(x.comorbid);
    });
    this.howrah.forEach(x => {
      this.dateHowrah.push(x.Date);
      this.activeHowrah.push(x.Active);
      this.sHowrah.push(x.severe);
      this.cHowrah.push(x.comorbid);
    });
    this.Np.forEach(x => {
      this.activeNp.push(x.Active);
      this.sNp.push(x.severe);
      this.cNp.push(x.comorbid);
    });
    this.Hoog.forEach(x => {
      this.activeHoog.push(x.Active);
      this.sHoog.push(x.severe);
      this.cHoog.push(x.comorbid);
    });
    this.Pmed.forEach(x => {
      this.activePmed.push(x.Active);
      this.sPmed.push(x.severe);
      this.cPmed.push(x.comorbid);
    });
  }

  createBarChart() {
    this.lineChart = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.date,
        datasets: [{
          label: 'Kolkata',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.active,
        },
        {
          label: 'Howrah',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'crimson', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.activeHowrah,

        },
        {
          label: 'North 24 Paraganas',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#33c91f', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.activeNp,
        },
        {
          label: 'Hooghly',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#28c2d6', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.activeHoog,
        },
        {
          label: 'Pasch. Midnapur',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#144add', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.activePmed,
        },]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }],
          xAxes: [{
            display: false
        }]
        },
      }
    });
    this.bars = new Chart(this.barChart1.nativeElement, {
      type: 'line',
      data: {
        labels: this.date,
        datasets: [{
          label: 'Kolkata',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.severe,
        },
        {
          label: 'Howrah',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'crimson', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.sHowrah,

        },
        {
          label: 'North 24 Paraganas',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#33c91f', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.sNp,
        },
        {
          label: 'Hooghly',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#28c2d6', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.sHoog,
        },
        {
          label: 'Pasch. Midnapur',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#144add', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.sPmed,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false
        }]
        }
      }
    });
    this.bars = new Chart(this.barChart2.nativeElement, {
      type: 'line',
      data: {
        labels: this.date,
        datasets: [{
          label: 'Kolkata',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.c,
      },
      {
        label: 'Howrah',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'crimson', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.cHowrah,

      },
      {
        label: 'North 24 Paraganas',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: '#33c91f', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.cNp,
      },
      {
        label: 'Hooghly',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: '#28c2d6', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.cHoog,
      },
      {
        label: 'Pasch. Midnapur',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: '#144add', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.cPmed,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false
        }]
        }
      }
    });
  }



  ngOnInit() {
  }

}
