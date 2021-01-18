import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxCsvParser} from 'ngx-csv-parser';
import * as moment from 'moment';
import {CsvParsingService} from '../../services/csv-parsing.service';
import {SharedDataService} from '../../services/shared-data.service';
import {Country} from '../../interfaces/country';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {


  constructor(private ngxCsvParser: NgxCsvParser, private csvDataService: CsvParsingService, private sharedDataService: SharedDataService) {

  }
  @ViewChild('fileImportInput') fileImportInput: any;
  startDateOnCsv: Date;
  endDateOnCsv: Date;
  defaultDate: Date;
  rangeDates: Date[];
  countries: Country[] = [];
  selectedCountries: Country[] = [];
  showDatesAndCountries = false;

  ngOnInit(): void {
  }

  loadCsvData($event: any): void {
    console.log($event);
    this.csvDataService.setCsvFile($event.files);
    this.csvDataService.parseCsvDataFromFile().subscribe(result => {

      // formating start and end dates so we can use them on ngprime calendar
      const start = moment(result[0].Dates, 'MM/DD/YYYY');
      const end = moment(result[result.length - 1].Dates, 'MM/DD/YYYY');
      this.formatToDate(start, end);
      // we construct an array of country type that holds the country code inside
      Object.keys(result[0]).slice(1).map(countryCode => {
        this.countries = [...this.countries, {countryCode}];
      });
      this.showDatesAndCountries = true;
    });


  }

  formatToDate(start, end): void {
    this.startDateOnCsv = new Date(start);
    this.endDateOnCsv = new Date(end);
    this.defaultDate = new Date(start);


  }


  closeCalendar(): void {
    if (this.rangeDates === undefined || this.rangeDates.length < 1) {
      return;
    }
    this.sharedDataService.setstartDate(this.rangeDates[0]);
    this.sharedDataService.setendDate(this.rangeDates[1]);

  }

  selectCountries(): void {
    this.sharedDataService.setcountries(this.selectedCountries);

  }

  clearFile(): void {
    this.fileImportInput.clear();
    this.showDatesAndCountries = false;
  }

}

