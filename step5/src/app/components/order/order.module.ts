import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';

import { routes } from './order.router';

import { NzModalService } from 'ng-zorro-antd';
import { NzModalSubject } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NzModalService,
    NzModalSubject
  ],
  providers: []
})
export class OrderModule { }
