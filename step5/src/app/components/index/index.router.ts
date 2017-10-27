import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { BacklogComponent } from './backlog/backlog.component';
import { RemindComponent } from './remind/remind.component';
import { SearchComponent } from './search/search.component';

export const routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'backlog',
                pathMatch: 'full'
            },
            {
                path: 'backlog',
                component: BacklogComponent
            },
            {
                path: 'remind',
                component: RemindComponent
            },
            {
                path: 'search',
                component: SearchComponent
            }
        ]
    }
];

