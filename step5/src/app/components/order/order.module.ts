import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';

import { routes } from './order.router';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class OrderModule { }
