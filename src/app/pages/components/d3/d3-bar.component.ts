import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-d3-bar',
    template: `
    <ngx-charts-bar-vertical
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarComponent implements OnDestroy, OnInit {

    @Input() chartData: Object[];
    @Input() chartSetting;

    public results: object[];
    public setting: object;
    public showLegend: boolean = true;
    public showXAxis: boolean = true;
    public showYAxis: boolean = true;
    public xAxisLabel;
    public yAxisLabel;
    public showXAxisLabel: boolean = true;
    public showYAxisLabel: boolean = true;
    ngOnInit(): void {
        this.results = this.chartData;
        this.setting = this.chartSetting;
        this.showLegend = this.chartSetting.showLegend;
        this.showXAxis = this.chartSetting.showXAxis;
        this.showYAxis = this.chartSetting.showYAxis;
        this.xAxisLabel = this.chartSetting.xAxisLabel;
        this.yAxisLabel = this.chartSetting.yAxisLabel;
        this.showXAxisLabel = this.chartSetting.showXAxisLabel;
        this.showYAxisLabel = this.chartSetting.showYAxisLabel;
    }

    colorScheme: any;
    themeSubscription: any;
    constructor(private theme: NbThemeService) {
        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
            const colors: any = config.variables;
            this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}

// --------資料格式
// [
//     { name: 'Germany', value: 8940 },
//     { name: 'USA', value: 5000 },
//     { name: 'France', value: 7200 },
// ]
