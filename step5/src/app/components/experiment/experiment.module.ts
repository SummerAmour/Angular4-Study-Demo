import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExperimentComponent } from './experiment.component';

import { routes } from './experiment.router';

@NgModule({
  declarations: [
    ExperimentComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class ExperimentModule { }
