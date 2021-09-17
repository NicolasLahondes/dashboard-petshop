import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardMainComponent } from './views/dashboard-main/dashboard-main.component';

const routes: Routes = [

{path: '', component: DashboardMainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
