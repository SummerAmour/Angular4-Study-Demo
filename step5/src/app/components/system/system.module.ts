import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

import { routes } from './system.router';
import { SimulateComponent } from './simulate/simulate.component';
import { ConditionComponent } from './condition/condition.component';
import { StepComponent } from './step/step.component';
import { SetComponent } from './set/set.component';
import { TestScheduleComponent } from './test-schedule/test-schedule.component';
import { TestProcessInfluenceComponent } from './test-process-influence/test-process-influence.component';
import { TestProcessComponent } from './test-process/test-process.component';

@NgModule({
  declarations: [
    SystemComponent,
    SimulateComponent,
    ConditionComponent,
    StepComponent,
    SetComponent,
    TestScheduleComponent,
    TestProcessInfluenceComponent,
    TestProcessComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class SystemModule { }
