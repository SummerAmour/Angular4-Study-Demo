import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
// 导入菜单的路由
import { routes } from './app.router';

import { OrderApplyComponent } from './components/order/order-apply/order-apply.component';
import { OrderCheckComponent } from './components/order/order-check/order-check.component';
import { OrderPeopleCheckComponent } from './components/order/order-people-check/order-people-check.component';
import { PutInOutComponent } from './components/sample/put-in-out/put-in-out.component';
import { CommonCheckTurnComponent } from './components/sample/common-check-turn/common-check-turn.component';
import { AccurateCheckTurnComponent } from './components/sample/accurate-check-turn/accurate-check-turn.component';
import { PhyCheckTurnComponent } from './components/sample/phy-check-turn/phy-check-turn.component';
import { CommonCheckUploadComponent } from './components/check/common-check-upload/common-check-upload.component';
import { AccurateCheckUploadComponent } from './components/check/accurate-check-upload/accurate-check-upload.component';
import { AccurateCheckoutComponent } from './components/check/accurate-checkout/accurate-checkout.component';
import { PhyUploadComponent } from './components/check/phy-upload/phy-upload.component';
import { PhyCheckoutComponent } from './components/check/phy-checkout/phy-checkout.component';
import { TestResultComponent } from './components/check/test-result/test-result.component';
import { OrderIceComponent } from './components/check/order-ice/order-ice.component';
import { ReportComponent } from './components/search/report/report.component';
import { SimulateComponent } from './components/system/simulate/simulate.component';
import { ConditionComponent } from './components/system/condition/condition.component';
import { StepComponent } from './components/system/step/step.component';
import { SetComponent } from './components/system/set/set.component';
import { TestScheduleComponent } from './components/system/test-schedule/test-schedule.component';
import { TestProcessInfluenceComponent } from './components/system/test-process-influence/test-process-influence.component';
import { TestProcessComponent } from './components/system/test-process/test-process.component';
//传递数据的弹出框
import { ModalTestComponent } from './components/order/order-check/modal-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    OrderApplyComponent,
    OrderCheckComponent,
    OrderPeopleCheckComponent,
    PutInOutComponent,
    CommonCheckTurnComponent,
    AccurateCheckTurnComponent,
    PhyCheckTurnComponent,
    CommonCheckUploadComponent,
    AccurateCheckUploadComponent,
    AccurateCheckoutComponent,
    PhyUploadComponent,
    PhyCheckoutComponent,
    TestResultComponent,
    OrderIceComponent,
    ReportComponent,
    SimulateComponent,
    ConditionComponent,
    StepComponent,
    SetComponent,
    TestScheduleComponent,
    TestProcessInfluenceComponent,
    TestProcessComponent,
    ModalTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    ModalTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
