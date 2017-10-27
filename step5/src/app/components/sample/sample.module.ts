import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleComponent } from './sample.component';

import { routes } from './sample.router';
import { PutInOutComponent } from './put-in-out/put-in-out.component';
import { CommonCheckTurnComponent } from './common-check-turn/common-check-turn.component';
import { AccurateCheckTurnComponent } from './accurate-check-turn/accurate-check-turn.component';
import { PhyCheckTurnComponent } from './phy-check-turn/phy-check-turn.component';

@NgModule({
  declarations: [
    SampleComponent,
    PutInOutComponent,
    CommonCheckTurnComponent,
    AccurateCheckTurnComponent,
    PhyCheckTurnComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class SampleModule { }
