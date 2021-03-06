import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: []
})
export class GraphicComponent implements OnInit {

  @Input('labels') doughnutChartLabels: Label[];
  @Input('data') doughnutChartData: MultiDataSet;
  @Input('type') doughnutChartType: ChartType;
  @Input() legend: StringConstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
