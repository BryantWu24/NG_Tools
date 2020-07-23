import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-d3-pie',
    template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent implements OnDestroy, OnInit {

    @Input() chartData: object[];
    @Input() chartSetting;

    public results: object[];
    public showLegend: boolean = true;
    public showLabels: boolean = true;
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

    ngOnInit(): void {
        this.results = this.chartData;
        this.showLegend = this.chartSetting.showLegend;
        this.showLabels = this.chartSetting.showLabels;
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
