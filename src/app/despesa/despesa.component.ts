import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DespesaService } from '../services/despesa.service';
import { DespesaMes, DespesaFonte, DespesaCategoria } from './despesa';



@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  despesasMes: DespesaMes[];
  despesasFonte: DespesaFonte[];
  despesasCategoria: DespesaCategoria[];
  meses: number[] = [];

  constructor(private service: DespesaService) {    
  }

  ngOnInit() {
    this.despesasPorMes();
    this.despesasPorFonte();
    this.despesasPorCategoria();
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

  public categoriaChartOptions: ChartOptions = {
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
  public pieChartLabels: Label[] = [];
  public categoriaChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public categoriaChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public categoriaChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public categoriaChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  public categoriaChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = [];
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

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  despesasPorMes() {
    this.service.getListaDespesaPorMes().subscribe(
      (res) => {
        this.despesasMes = res;        
        this.barChartData = [
          { data: Object.assign(this.despesasMes.map(x => x.total)), label: 'valor' },
        ];        
        this.barChartLabels = this.addMes(Object.assign(this.despesasMes.map(x => x.mes_movimento)));
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

  despesasPorFonte() {
    this.service.getListaDespesaPorFontes().subscribe(
      (res) => {
        this.despesasFonte = res;
        this.pieChartLabels = Object.assign(this.despesasFonte.map(x => x.fonte_recurso_nome));
        this.pieChartData = Object.assign(this.despesasFonte.map(x => x.total));          
        console.log("this.despesasFonte :: ", this.despesasFonte);
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err));
      }
    );
  }

  despesasPorCategoria() {
    this.service.getListaDespesaPorCategoria().subscribe(
      (res) => {
        this.despesasCategoria = res;
        this.categoriaChartLabels = Object.assign(this.despesasCategoria.map(x => x.categoria_economica_nome));
        this.categoriaChartData = Object.assign(this.despesasCategoria.map(x => x.total));          
        console.log("this.despesasCategoria :: ", this.despesasCategoria);
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err));
      }
    );
  }

}
