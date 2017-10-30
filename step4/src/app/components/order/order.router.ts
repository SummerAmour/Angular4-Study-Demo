import { RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderApplyComponent } from './order-apply/order-apply.component';
// import { OrderCheckComponent } from './order-check/order-check.component';
// import { OrderPeopleCheckComponent } from './order-people-check/order-people-check.component';

export const routes = [
    {
        path: '',
        component: OrderComponent,
        children: [
            {
                path: 'apply',
                // loadChildren: './order-apply/order-apply.module#OrderApplyModule'
                component: OrderApplyComponent
            }
            // {
            //     path: 'check',
            //     component: OrderCheckComponent
            // },
            // {
            //     path: 'peopleCheck',
            //     component: OrderPeopleCheckComponent
            // }
        ]
    }
]
