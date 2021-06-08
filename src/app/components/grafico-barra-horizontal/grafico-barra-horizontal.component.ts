import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy   {
  results = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 25
    },
    {
      name: 'Juego 3',
      value: 15
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';
  intervalo: any;
  constructor() {

    this.intervalo = setInterval( () => {
      console.log('TIC');
      const newResults = [...this.results];
      for (const i in newResults) {
        if (newResults) {
          newResults[i].value = Math.round(Math.random() * 500);
        }
      }
      this.results = [...newResults];
    }, 1500);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }

}
