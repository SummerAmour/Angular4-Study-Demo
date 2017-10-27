// import { RouterModule } from '@angular/router';

// export const routes = [
//     {
//         path: 'index',
//         loadChildren: './components/index/index.module#IndexModule'
//     },
//     {
//         path: 'order',
//         loadChildren: './components/order/order.module#OrderModule'
//     },
//     {
//         path: 'sample', 
//         loadChildren: './components/sample/sample.module#SampleModule'
//     },
//     {
//         path: 'experiment',
//         loadChildren: './components/experiment/experiment.module#ExperimentModule'
//     },
//     {
//         path: 'check',
//         loadChildren: './components/check/check.module#CheckModule'
//     },
//     {
//         path: 'system',
//         loadChildren: './components/system/system.module#SystemModule'
//     },
//     {
//         path: '**', 
//         redirectTo: 'index',
//          pathMatch: 'full'
//     }
// ];
import { RouterModule } from '@angular/router';
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

export const routes = [
    {
        path: 'index',
        loadChildren: './components/index/index.module#IndexModule'
    },
    {
        path: 'order/apply',
        component: OrderApplyComponent
    },
    {
        path: 'order/check',
        component: OrderCheckComponent
    },
    {
        path: 'order/peopleCheck',
        component: OrderPeopleCheckComponent
    },
    {
        path: 'sample/putInOut',
        component: PutInOutComponent
    },
    {
        path: 'sample/commonTurn',
        component: CommonCheckTurnComponent
    },
    {
        path: 'sample/accurateTurn',
        component: AccurateCheckTurnComponent
    },
    {
        path: 'sample/phyTurn',
        component: PhyCheckTurnComponent
    },
    {
        path: 'check/commonUpload',
        component: CommonCheckUploadComponent
    },
    {
        path: 'check/accurateUpload',
        component: AccurateCheckUploadComponent
    },
    {
        path: 'check/accurateCheckout',
        component: AccurateCheckoutComponent
    },
    {
        path: 'check/pyUpload',
        component: PhyUploadComponent
    },
    {
        path: 'check/pyCheckout',
        component: PhyCheckoutComponent
    },
    {
        path: 'check/testResult',
        component: TestResultComponent
    },
    {
        path: 'check/orderIce',
        component: OrderIceComponent
    },
    {
        path: 'search/report',
        component: ReportComponent
    },
    {
        path: 'system/simulate',
        component: SimulateComponent
    },
    {
        path: 'system/condition',
        component: ConditionComponent
    },
    {
        path: 'system/step',
        component: StepComponent
    },
    {
        path: 'system/set',
        component: SetComponent
    },
    {
        path: 'system/schdule',
        component: TestScheduleComponent
    },
    {
        path: 'system/processInfluence',
        component: TestProcessInfluenceComponent
    },{
        path: 'system/process',
        component: TestProcessComponent
    },
    // {
    //     path: 'sample', 
    //     loadChildren: './components/sample/sample.module#SampleModule'
    // },
    // {
    //     path: 'experiment',
    //     loadChildren: './components/experiment/experiment.module#ExperimentModule'
    // },
    // {
    //     path: 'check',
    //     loadChildren: './components/check/check.module#CheckModule'
    // },
    // {
    //     path: 'system',
    //     loadChildren: './components/system/system.module#SystemModule'
    // },
    {
        path: '**', 
        redirectTo: 'index',
         pathMatch: 'full'
    }
];

