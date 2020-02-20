import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { DespesaService } from '../services/despesa.service';
import { Despesa } from './despesa';



@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  despesas: Despesa[];
  meses: number[] = [];

  constructor(private service: DespesaService) {
    this.listarDespesas();
  }

  ngOnInit() {

  }

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
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Total despesas(mês)' },

  ];



  //----------------

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
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

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  listarDespesas() {
    this.service.getListaDespesaPorMes().subscribe(
      (res) => {
        this.despesas = res;        
        this.barChartData = [
          { data: Object.assign(this.despesas.map(x => x.total)), label: 'valor' },
        ];        
        this.barChartLabels = this.addMes(Object.assign(this.despesas.map(x => x.mes_movimento)));
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err));
      }
    );

  }

  addMes(meses: number[]) {
    let mesesFormatados = [];  
    meses.forEach(element => {
      switch (element) {
        case 1:
          mesesFormatados.push("Janeiro");          
          break;
        case 2:
          mesesFormatados.push("Fevereiro");
          break;
        case 3:
          mesesFormatados.push("Março");
          break;
        case 4:
          mesesFormatados.push("Abril");
          break;
        case 5:
          mesesFormatados.push("Maio");
          break;
        case 6:
          mesesFormatados.push("Junho");
          break;
        case 7:
          mesesFormatados.push("Julho");
          break;
        case 8:
          mesesFormatados.push("Agosto");
          break;
        case 9:
          mesesFormatados.push("Setembro");
          break;
        case 10:
          mesesFormatados.push("Outubro");
          break;
        case 11:
          mesesFormatados.push("Novembro");
          break;
        case 12:
          mesesFormatados.push("Dezembro");
          break;
        default:
          console.log("Não exite mês")
          break;
      }
    });

    return mesesFormatados;
  }

}
