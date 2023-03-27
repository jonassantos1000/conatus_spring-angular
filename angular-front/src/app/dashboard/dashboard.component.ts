import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number | string;
  symbol: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 5, name: 'Joao', weight: 'R$ 200,95', symbol: '25/03/23'},
    {position: 4, name: 'Ana', weight: 'R$ 4000,46', symbol: '24/03/23'},
    {position: 3, name: 'Maria', weight: 'R$ 155,24', symbol: '24/03/23'},
    {position: 2, name: 'Paulo', weight: 'R$ 520,53', symbol: '21/03/23'},
    {position: 1, name: 'Marcos', weight: 'R$ 10,81', symbol: '15/03/23'}
  ];

  ELEMENT_DATA2: PeriodicElement[] = [
    {position: 1, name: 'Luan', weight: 200, symbol: 'R$ 2500,21'},
    {position: 2, name: 'Pedro', weight: 135, symbol: 'R$ 1500,55'},
    {position: 3, name: 'Rita', weight: 90, symbol: 'R$ 580,05'},
    {position: 4, name: 'Rodrigo', weight: 85, symbol: 'R$ 650,15'},
    {position: 5, name: 'Gabriel', weight: 60, symbol: 'R$ 200,30'}
  ];

  //referente a tabela
  dataSource = this.ELEMENT_DATA;
  dataSource2 = this.ELEMENT_DATA2;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}
