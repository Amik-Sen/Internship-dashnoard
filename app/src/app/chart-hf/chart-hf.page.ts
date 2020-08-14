import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import data from '../Data_json/Health Advisor/kolkata.json';
import dataHowrah from '../Data_json/Health Advisor/Howrah.json';
import dataNp from '../Data_json/Health Advisor/N24.json';
import dataHoog from '../Data_json/Health Advisor/Hoogly.json';
import dataPmed from '../Data_json/Health Advisor/PMed.json';
import pa from '../Data_json/Predictions/prediction_active.json';
import pc from '../Data_json/Predictions/prediction_comorbid.json';
import ps from '../Data_json/Predictions/prediction_sev.json';

@Component({
  selector: 'app-chart-hf',
  templateUrl: './chart-hf.page.html',
  styleUrls: ['./chart-hf.page.scss'],
})
export class ChartHFPage implements OnInit {

  private kolkata = data;
  private howrah = dataHowrah;
  private Np = dataNp;
  private Hoog = dataHoog;
  private Pmed = dataPmed;
  private preA = pa;
  private preC = pc;
  private preS = ps;
  
  @ViewChild('barChart') barChart;
  @ViewChild('barChart1') barChart1;
  @ViewChild('barChart2') barChart2;
  @ViewChild('barChart3') barChart3;
  @ViewChild('barChart4') barChart4;
  @ViewChild('barChart5') barChart5;
  @ViewChild('barChart6') barChart6;
  @ViewChild('barChart7') barChart7;

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

  p_date: string[] = [];
  p_active: number[] = [];
  p_dateHowrah: string[] = [];
  p_activeHowrah: number[] = [];
  p_activeNp: number[] = [];
  p_activeHoog: number[] = [];
  p_activePmed: number[] = [];
  p_severe: number[] = [];
  p_sHowrah: number[] = [];
  p_sNp: number[] = [];
  p_sHoog: number[] = [];
  p_sPmed: number[] = [];
  p_c: number[] = [];
  p_cHowrah: number[] = [];
  p_cNp: number[] = [];
  p_cHoog: number[] = [];
  p_cPmed: number[] = [];
  
  tk: number[] = [];
  hyperk: number[] = [];
  thwh: number[] = [];
  hyperhwh: number[] = [];
  thoo: number[] = [];
  hyperhoo: number[] = [];
  tn: number[] = [];
  hypern: number[] = [];
  tp: number[] = [];
  hyperp: number[] = [];



  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
    this.kolkata.forEach(x => {
      this.date.push(x.Date);
      this.active.push(x.Active);
      this.severe.push(x.severe);
      this.c.push(x.comorbid);
      this.tk.push(x.Total)
      this.hyperk.push(x.Hypertension)
    });
    this.howrah.forEach(x => {
      this.dateHowrah.push(x.Date);
      this.activeHowrah.push(x.Active);
      this.sHowrah.push(x.severe);
      this.cHowrah.push(x.comorbid);
      this.thwh.push(x.Total)
      this.hyperhwh.push(x.Hypertension)
    });
    this.Np.forEach(x => {
      this.activeNp.push(x.Active);
      this.sNp.push(x.severe);
      this.cNp.push(x.comorbid);
      this.tn.push(x.Total)
      this.hypern.push(x.Hypertension)
    });
    this.Hoog.forEach(x => {
      this.activeHoog.push(x.Active);
      this.sHoog.push(x.severe);
      this.cHoog.push(x.comorbid);
      this.thoo.push(x.Total)
      this.hyperhoo.push(x.Hypertension)
    });
    this.Pmed.forEach(x => {
      this.activePmed.push(x.Active);
      this.sPmed.push(x.severe);
      this.cPmed.push(x.comorbid);
      this.tp.push(x.Total)
      this.hyperp.push(x.Hypertension)
    });
    this.preA.forEach(x => {
      this.p_date.push(x.Date);
      this.p_activeHoog.push(x.active_hoogly);
      this.p_activeHowrah.push(x.active_howrah);
      this.p_activeNp.push(x.active_N24);
      this.p_active.push(x.active_kolkata);
      this.p_activePmed.push(x.active_pmed);
    });
    this.preC.forEach(x => {
      this.p_c.push(x.daily_kolkata);
      this.p_cHowrah.push(x.daily_howrah);
      this.p_cNp.push(x.daily_N24);
      this.p_cHoog.push(x.daily_hoogly);
      this.p_cPmed.push(x.daily_pmed);
    });
    this.preS.forEach(x => {
      this.p_sHoog.push(x.sev_hoogly);
      this.p_sHowrah.push(x.sev_howrah);
      this.p_sNp.push(x.sev_N24);
      this.p_severe.push(x.sev_kolkata);
      this.p_sPmed.push(x.sev_pmed);
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
    this.lineChart = new Chart(this.barChart5.nativeElement, {
      type: 'line',
      data: {
        labels: this.p_date,
        datasets: [{
          label: 'Kolkata',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_active,
        },
        {
          label: 'Howrah',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'crimson', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_activeHowrah,

        },
        {
          label: 'North 24 Paraganas',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#33c91f', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_activeNp,
        },
        {
          label: 'Hooghly',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#28c2d6', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_activeHoog,
        },
        {
          label: 'Pasch. Midnapur',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#144add', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_activePmed,
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
            display: true
        }]
        },
      }
    });
    this.bars = new Chart(this.barChart4.nativeElement, {
      type: 'line',
      data: {
        labels: this.p_date,
        datasets: [{
          label: 'Kolkata',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_severe,
        },
        {
          label: 'Howrah',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'crimson', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_sHowrah,

        },
        {
          label: 'North 24 Paraganas',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#33c91f', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_sNp,
        },
        {
          label: 'Hooghly',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#28c2d6', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_sHoog,
        },
        {
          label: 'Pasch. Midnapur',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#144add', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.p_sPmed,
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
            display: true
        }]
        }
      }
    });
    this.bars = new Chart(this.barChart3.nativeElement, {
      type: 'line',
      data: {
        labels: this.p_date,
        datasets: [{
          label: 'Kolkata',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.p_c,
      },
      {
        label: 'Howrah',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'crimson', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.p_cHowrah,

      },
      {
        label: 'North 24 Paraganas',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: '#33c91f', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.p_cNp,
      },
      {
        label: 'Hooghly',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: '#28c2d6', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.p_cHoog,
      },
      {
        label: 'Pasch. Midnapur',
          fill: true,
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: '#144add', // array should have same number of elements as number of dataset
          borderWidth: 2,
          pointRadius: 1,
          data: this.p_cPmed,
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
            display: true
        }]
        }
      }
    });
    this.lineChart = new Chart(this.barChart6.nativeElement, {
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
            data: this.tk,
        },
        {
          label: 'Howrah',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'crimson', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.thwh,

        },
        {
          label: 'North 24 Paraganas',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#33c91f', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.tn,
        },
        {
          label: 'Hooghly',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#28c2d6', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.thoo,
        },
        {
          label: 'Pasch. Midnapur',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#144add', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.tp,
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
    this.lineChart = new Chart(this.barChart7.nativeElement, {
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
            data: this.hyperk,
        },
        {
          label: 'Howrah',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: 'crimson', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.hyperhwh,

        },
        {
          label: 'North 24 Paraganas',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#33c91f', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.hypern,
        },
        {
          label: 'Hooghly',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#28c2d6', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.hyperhoo,
        },
        {
          label: 'Pasch. Midnapur',
            fill: true,
            backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
            borderColor: '#144add', // array should have same number of elements as number of dataset
            borderWidth: 2,
            pointRadius: 1,
            data: this.hyperp,
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
  }

  ngOnInit() {
  }

}
