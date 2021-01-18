import {Component, Input, OnInit} from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() relevantData: any[];
  hotSettings: Handsontable.GridSettings = {

  };


  constructor() {
  }

  ngOnInit(): void {
  }
}
