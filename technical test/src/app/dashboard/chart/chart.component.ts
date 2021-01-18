import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import * as moment from 'moment';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsExporting from 'highcharts/modules/exporting';

// @ts-ignore
HighchartsMore(Highcharts);
// @ts-ignore
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit, OnChanges {
// we use hc angular
  @Input() relevantData: any[];
  lineChartDataArr: any[] = [];
  barChartDataArr: any[] = [];
  isHighcharts = typeof Highcharts === 'object';
  Highcharts = Highcharts;
  lineChart;
  barChart;
  chartConstructor = 'stockChart';
  lineChartCallback;
  barChartCallback;
  updateFlag = false;
  lineChartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'lineContainer',
      borderColor: 'gray',
      borderWidth: 2
    },
    exporting: {
      enabled: true
    },
    series: []
  };
  barChartOptions: Highcharts.Options = {
    chart: {
      renderTo: 'barContainer',
      borderColor: 'gray',
      borderWidth: 2
    },
    exporting: {
      enabled: true
    },
    series: []

    // series: this.chartDataArr,
  };

  constructor() {
    const self = this;
    // saving chart reference using chart callback
    this.lineChartCallback = chart => {
      self.lineChart = chart;
    };
    this.barChartCallback = chart => {
      self.barChart = chart;
    };

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateChart();

  }


  ngOnInit(): void {

  }

  updateChart(): void {
    this.lineChartData();
    this.barChartData();
    this.updateFlag = true;
  }


  lineChartData(): void {
    let data = [];
    let chartD = [];
    this.relevantData.map(row => {
      const k = Object.keys(row).slice(1);
      k.forEach(key => {
        const obj = {
          prices: [],
          country: undefined
        };
        obj.country = key;
        obj.prices = row[key];
        data = [...data, obj];

      });
      let chartData = [];
      chartData = data.reduce((res, value) => {
        if (!res[value.country]) {
          res[value.country] = {
            // add other chart propoerties
            title: 'Prices Line Chart',
            type: 'line',
            name: value.country,
            data: [],
            pointInterval: 3600000,
            pointStart: Date.parse(moment(this.relevantData[0].Dates, 'MM/DD/YYYY:k').format('MM/DD/YYYY')),
          };
          chartData = [...chartData, res[value.country]];
        }
        res[value.country].data = [...res[value.country].data, Number(value.prices)];
        chartD = res;
        return res;

      }, {});
      return chartData;
    });
    let chartValues = [];
    Object.values(chartD).forEach(x => {
      chartValues = [...chartValues, x];
    });
    this.lineChartDataArr = chartValues;
    this.lineChartOptions.series = [...this.lineChartDataArr];

  }

  barChartData(): void {
    let data = [];
    let chartD = [];
    this.relevantData.map(row => {
      const k = Object.keys(row).slice(1);
      k.forEach(key => {
        const obj = {
          prices: [],
          country: undefined
        };
        obj.country = key;
        obj.prices = row[key];
        data = [...data, obj];

      });
      let chartData = [];
      chartData = data.reduce((res, value) => {
        if (!res[value.country]) {
          res[value.country] = {
            // add other chart propoerties
            title: 'Prices Bar Chart',
            type: 'bar',
            name: value.country,
            data: [],
            pointInterval: 3600000,
            pointStart: Date.parse(moment(this.relevantData[0].Dates, 'MM/DD/YYYY:k').format('MM/DD/YYYY')),
          };
          chartData = [...chartData, res[value.country]];
        }
        res[value.country].data = [...res[value.country].data, Number(value.prices)];
        chartD = res;
        return res;

      }, {});
      return chartData;
    });
    let chartValues = [];
    Object.values(chartD).forEach(x => {
      chartValues = [...chartValues, x];
    });
    this.barChartDataArr = chartValues;
    this.barChartOptions.series = [...this.barChartDataArr];

    console.log(this.barChartDataArr);

  }
}
