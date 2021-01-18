import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HelloComponent} from './pages/hello/hello.component';
import {MainViewComponent} from './shared/main-view/main-view.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {DragDropModule} from 'primeng/dragdrop';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {SearchBarComponent} from './shared/search-bar/search-bar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartComponent} from './dashboard/chart/chart.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {HotTableModule} from '@handsontable/angular';
import { TableComponent } from './dashboard/table/table.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {ChartModule} from 'angular-highcharts';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MainViewComponent,
    LoginFormComponent,
    HomepageComponent,
    SearchBarComponent,
    DashboardComponent,
    ChartComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    CalendarModule,
    InputTextModule,
    MultiSelectModule,
    SharedModule,
    CardModule,
    DragDropModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    HotTableModule,
    HighchartsChartModule,
    ChartModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
