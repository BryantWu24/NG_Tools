import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D3Component } from './d3/d3.component';
import { AnalyticsComponent } from './analytics.component';

const routes: Routes = [{
    path: '',
    component: AnalyticsComponent,
    children: [{
        path: 'd3',
        component: D3Component,
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalyticsRoutingModule { }

export const routedComponents = [
    D3Component,
    AnalyticsComponent
];
