import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  @Input() tituloGrafico: string = "Sin Titulo"
  @Input() labelGrafico: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'] 
  @Input() dataGrafico:any[] = [
    [350, 450, 100]
  ];
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors:Color[]=[
    {backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
  ]

}
