import { Component } from "@angular/core";

@Component({
    selector: 'analytic_barChart',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})


export class AnalyticBarComponent {
    // BAR
    public barData = [
        { name: 'Taiwan', value: 18940 },
        { name: 'USA', value: 5000 },
        { name: 'France', value: 7200 },
        { name: 'USB', value: 5000 },
        { name: 'USC', value: 7200 },
        { name: 'USD', value: 5000 },
        { name: 'USE', value: -7200 },
        { name: 'USF', value: 5000 },
        { name: 'USG', value: 7200 },
        { name: 'US1A', value: 5000 },
        { name: 'Fra1nce', value: 7200 },
        { name: 'USB1', value: 5000 },
        { name: 'USC1', value: 7200 }
    ];
    public barSetting = {
        showLegend: true,
        showXAxis: true,
        showYAxis: true,
        showXAxisLabel: true,
        showYAxisLabel: true,
        xAxisLabel: 'Country',
        yAxisLabel: 'Popular'
    }
}