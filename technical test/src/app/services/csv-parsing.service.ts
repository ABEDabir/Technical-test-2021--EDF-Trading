import {Injectable} from '@angular/core';
import {NgxCsvParser} from 'ngx-csv-parser';
import {map} from 'rxjs/operators';
import * as moment from 'moment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvParsingService {

  private csvFile: Observable<any>;

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  setCsvFile(files: any): void {
    this.csvFile = this.ngxCsvParser.parse(files[0], {header: true, delimiter: ','});
  }

  parseCsvDataFromFile(): Observable<any> {
    return this.csvFile
      .pipe(map((csvContent: Array<any>) => {
        // time formating
        let csvdataa: any[] = [];
        csvContent.map(csvData => {
          csvData.Dates = moment(csvData.Dates.replace(' - H', ''), 'YYYYMMDDk').format('MM/DD/YYYY:k');
          csvdataa = [...csvdataa, csvData];
        });
        // console.log(csvdataa);
        return csvdataa;
      }));
  }

}
