import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { AnalyticsRoutingModule, routedComponents } from './analytics-routing.module';
import { D3BarComponent } from '../components/d3/d3-bar.component';
import { D3LineComponent } from '../components/d3/d3-line.component';
import { D3PieComponent } from '../components/d3/d3-pie.component';
import { D3AreaStackComponent } from '../components/d3/d3-area-stack.component';
import { D3PolarComponent } from '../components/d3/d3-polar.component';
import { D3AdvancedPieComponent } from '../components/d3/d3-advanced-pie.component';
const components = [
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent
];

@NgModule({
  imports: [
    ThemeModule,
    AnalyticsRoutingModule,
    NgxChartsModule,
    NbCardModule,
  ],
  declarations: [...routedComponents, ...components],
})
export class AnalyticsModule {}
