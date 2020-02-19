import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  // fillerContent = Array(50).fill(0).map(() =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

       public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
          position: 'top',
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              return label;
            },
          },
        }
      };
      public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
      public pieChartData: number[] = [300, 500, 100];
      public pieChartType: ChartType = 'pie';
      public pieChartLegend = true;
      public pieChartPlugins = [];
      public pieChartColors = [
        {
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
      ];
    
      public barChartOptions: ChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: { xAxes: [{}], yAxes: [{}] },
      };
      public barChartLabels: Label[] = ['2019', '2019', '2019', '2019', '2019', '2019', '2019'];
      public barChartType: ChartType = 'bar';
      public barChartLegend = true;
    
      public barChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Mês' },
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ];
    
      constructor() { }
    
      ngOnInit() {
      }
    
      // events
      public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
      }
    
      public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
      }
    
      changeLabels() {
        const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
          'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
          'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
          'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
          'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
        const randomWord = () => words[Math.trunc(Math.random() * words.length)];
        this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
      }
    
      addSlice() {
        this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
        this.pieChartData.push(400);
        this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
      }
    
      removeSlice() {
        this.pieChartLabels.pop();
        this.pieChartData.pop();
        this.pieChartColors[0].backgroundColor.pop();
      }
    
      changeLegendPosition() {
        this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
      }
    
      // events
      // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      //   console.log(event, active);
      // }
    
      // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      //   console.log(event, active);
      // }
    
      public randomize(): void {
        this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
      }

}
