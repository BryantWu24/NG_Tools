import { Component } from '@angular/core';

@Component({
    selector: 'ngx-d3',
    styleUrls: ['./d3.component.scss'],
    templateUrl: './d3.component.html',
})
export class D3Component {
    // ADVANCED PIE
    public advancedData = [
        { name: 'Germany', value: 8940000, },
        { name: 'USA', value: 5000000, },
        { name: 'France', value: 7200000, },
        { name: 'Taiwan', value: 42000000, },
    ];

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
        { name: 'USC1', value: 7200 },
        { name: 'USD1', value: 5000 },
        { name: 'USE1', value: -7200 },
        { name: 'USF1', value: 5000 },
        { name: 'USG1', value: 7200 },
        { name: '2USA', value: 5000 },
        { name: 'F2rance', value: 7200 },
        { name: 'US2B', value: 5000 },
        { name: 'US2C', value: 7200 },
        { name: 'US2D', value: 5000 },
        { name: 'US2E', value: -7200 },
        { name: 'USF2', value: 5000 },
        { name: 'USG2', value: 7200 },
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

    // PIE
    public pieData = [
        { name: 'Taiwan', value: 12940 },
        { name: 'Germany', value: 8940 },
        { name: 'USA', value: 5000 },
        { name: 'France', value: 7200 },
    ];
    public pieSetting = {
        showLegend: true,
        showLabels: true
    }

    // LINE
    public lineData = [
        {
            name: 'Germany',
            series: [
                {
                    name: '2010',
                    value: 7300,
                },
                {
                    name: '2011',
                    value: 8940,
                },
                {
                    name: '2012',
                    value: 6940,
                },
            ],
        },
        {
            name: 'USA',
            series: [
                {
                    name: '2010',
                    value: 7870,
                },
                {
                    name: '2011',
                    value: 8270,
                },
            ],
        },
        {
            name: 'France',
            series: [
                {
                    name: '2009',
                    value: 3002,
                },
                {
                    name: '2010',
                    value: 5800,
                },
                {
                    name: '2011',
                    value: 4200,
                },
            ],
        },
    ];
    
    public lineSetting = {
        showLegend: true,
        showXAxis: true,
        showYAxis: true,
        showXAxisLabel: true,
        xAxisLabel: 'Country',
        showYAxisLabel: true,
        yAxisLabel: 'Population'

    }

}
