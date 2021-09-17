import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardMainComponent } from './views/dashboard-main/dashboard-main.component';
import { ButtonGenericComponent } from './components/button-generic/button-generic.component';
import { FirstPanelComponent } from './components/first-panel/first-panel.component';
import { DisplayNumberComponent } from './components/display-number/display-number.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoDisplayComponent } from './components/info-display/info-display.component';
import { DisplayChartComponent } from './components/display-chart/display-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardMainComponent,
    ButtonGenericComponent,
    FirstPanelComponent,
    DisplayNumberComponent,
    InfoDisplayComponent,
    DisplayChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
