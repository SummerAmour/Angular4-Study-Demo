import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderApplyComponent } from './order-apply.component';

import { routes } from './order-apply.router';

@NgModule({
  declarations: [
    OrderApplyComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class OrderApplyModule { }
