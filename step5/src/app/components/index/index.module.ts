import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { CommonModule } from '@angular/common';

import { IndexComponent } from './index.component';
import { BacklogComponent } from './backlog/backlog.component';
import { RemindComponent } from './remind/remind.component';
import { SearchComponent } from './search/search.component';
import { routes } from './index.router';

@NgModule({
  declarations: [
    IndexComponent,
    BacklogComponent,
    RemindComponent,
    SearchComponent
  ],
  imports: [
    // NgZorroAntdModule,
    // CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: []
})
export class IndexModule { }


