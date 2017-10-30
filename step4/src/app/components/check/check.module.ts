import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CheckComponent } from './check.component';
import { routes } from './check.router';
import { CommonCheckUploadComponent } from './common-check-upload/common-check-upload.component';
import { AccurateCheckUploadComponent } from './accurate-check-upload/accurate-check-upload.component';
import { AccurateCheckoutComponent } from './accurate-checkout/accurate-checkout.component';
import { PhyUploadComponent } from './phy-upload/phy-upload.component';
import { PhyCheckoutComponent } from './phy-checkout/phy-checkout.component';
import { TestResultComponent } from './test-result/test-result.component';
import { OrderIceComponent } from './order-ice/order-ice.component';

@NgModule({
  declarations: [
    CheckComponent,
    CommonCheckUploadComponent,
    AccurateCheckUploadComponent,
    AccurateCheckoutComponent,
    PhyUploadComponent,
    PhyCheckoutComponent,
    TestResultComponent,
    OrderIceComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class CheckModule { }
