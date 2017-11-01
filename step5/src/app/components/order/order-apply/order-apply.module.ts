import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { OrderApplyComponent } from './order-apply.component';

import { routes } from './order-apply.router';

@NgModule({
  declarations: [
    OrderApplyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class OrderApplyModule { }
