import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-d3-line',
    template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="result"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent implements OnDestroy, OnInit {
    @Input() chartData;
    @Input() chartSetting;
    public result;
    showLegend = true;
    showXAxis = true;
    showYAxis = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
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

    ngOnInit():void{
        this.result = this.chartData;
        this.showLegend = this.chartSetting.showLegend;
        this.showXAxis = this.chartSetting.showXAxis;
        this.showYAxis = this.chartSetting.showYAxis;
        this.showXAxisLabel = this.chartSetting.showXAxisLabel;
        this.xAxisLabel = this.chartSetting.xAxisLabel;
        this.showYAxisLabel = this.chartSetting.showYAxisLabel;
        this.yAxisLabel = this.chartSetting.yAxisLabel;
    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
