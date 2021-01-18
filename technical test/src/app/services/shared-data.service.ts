import {Injectable} from '@angular/core';
import {Country} from '../interfaces/country';
import {CsvParsingService} from './csv-parsing.service';
import * as moment from 'moment';
import {map} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedCountries: Country[];
  private startDate: Date = undefined;
  private endDate: Date = undefined;
  private releventData: any[];

  constructor(private csvDataService: CsvParsingService) {
  }


  getcountries(): Country[] {
    return this.selectedCountries;
  }

  setcountries(value: Country[]): void {
    this.selectedCountries = value;
  }

  getstartDate(): Date {
    return this.startDate;
  }

  setstartDate(value: Date): void {
    this.startDate = value;
  }

  getendDate(): Date {
    return this.endDate;
  }

  setendDate(value: Date): void {
    this.endDate = value;
  }

  getrelevantData(): Observable<any> {
    return of(this.releventData);
  }




  setrelevantData(): Observable<any[]> {
    if (this.startDate === undefined || this.endDate === undefined || this.selectedCountries.length < 1) {
      return EMPTY;
    }
    let resultWithGoodDates: any[];
    const momentStartDate = moment(this.startDate).format('MM/DD/YYYY');
    // console.log(momentStartDate);
    // we add 23h so the index doesent stop at the first hour found
    const momentEndDate = moment(this.endDate).add(23, 'hour').format('MM/DD/YYYY');
    console.log(momentEndDate);
    return this.csvDataService.parseCsvDataFromFile().pipe(map(result => {
      const startDateRangeIndex = result.findIndex(res => moment(res.Dates, 'MM/DD/YYYY:k').format('MM/DD/YYYY') === momentStartDate);
      console.log(startDateRangeIndex);
      const endDateRangeIndex = result.findIndex(res => moment(res.Dates, 'MM/DD/YYYY:k').format('MM/DD/YYYY') === momentEndDate);
      console.log(endDateRangeIndex);
      if (endDateRangeIndex === -1) {
        resultWithGoodDates = result.slice(startDateRangeIndex, startDateRangeIndex + 24);

      } else {
        resultWithGoodDates = result.slice(startDateRangeIndex, endDateRangeIndex + 24);

      }
      // if the selected countries array doesent include the key we remove that key
      // !this.selectedCountries.map(county => county.countryCode).includes(key);
      let releventData: any[] = [];
      resultWithGoodDates.map(row => {
        // console.log(row);
        const k = Object.keys(row).slice(1).filter(key => this.selectedCountries.map(x => x.countryCode).includes(key));
        const obj = {};
        k.forEach(x => obj[x] = row[x]);
        const date = {Dates: row.Dates};
        row = {...date, ...obj};
        releventData = [...releventData, row];
        this.releventData = releventData;

      });
      console.log(releventData);
      return releventData;
    }));

  }
}
