import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
    selector: 'ngx-d3-advanced-pie',
    template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent implements OnDestroy, OnInit {

    @Input() chartData: object[];

    public single:object[];
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
        this.single = this.chartData;

    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}

    //------- 資料格式
    //    [
    //     {
    //       name: 'Germany',
    //       value: 8940000,
    //     },
    //     {
    //       name: 'USA',
    //       value: 5000000,
    //     },
    //     {
    //       name: 'France',
    //       value: 7200000,
    //     },
    //   ];
