import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './../menu/menu.component';
import { AccountingComponent } from './../accounting/accounting.component';
import { CountComponent } from './../count/count.component';
import { CountYearComponent } from './../count/count-year/count-year.component';
import { CountMonthComponent } from './../count/count-month/count-month.component';

const ROUTES: Routes = [
  {path: '', component: AccountingComponent},
  {path: 'count', component: CountComponent, children: [
    {path: '', component: CountMonthComponent},
    {path: 'year', component: CountYearComponent}
  ]}
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class RouteringModule { }
