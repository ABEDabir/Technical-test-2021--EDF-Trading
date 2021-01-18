import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../services/shared-data.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],


})
export class DashboardComponent implements OnInit {

  constructor(private sharedDataService: SharedDataService) {
  }

  displayTable = true;
  displayChart = true;
  relevantData: any[] = [];
  displayT = 'Hide data table';
  displayC = 'Hide data charts';


  ngOnInit(): void {
  }


  getData(): void {
    this.sharedDataService.setrelevantData().subscribe(result => {
      this.relevantData = result;
    });
  }

  displayDataTable(): void {
    if (this.relevantData.length > 0) {

      this.displayTable = !this.displayTable;
      if (this.displayTable === true) {
        this.displayT = 'Hide data table';
      } else {
        this.displayT = 'Display data table';
      }

    }


  }

  displayDataChart(): void {

    if (this.relevantData.length > 0) {
      this.displayChart = !this.displayChart;
      if (this.displayChart === true) {
        this.displayC = 'Hide data charts';
      } else {
        this.displayC = 'Display data charts';
      }
    }

  }

}
