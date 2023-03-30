import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginatorCustomService } from '../shared/paginator-custom.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private paginatorCustom: PaginatorCustomService) { }

  ngAfterViewInit() {
    this.paginatorCustom.translateMatPaginator(this.paginator)
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gabriel', weight: '749.283.746-51', symbol: '12.345.678-9'},
  {position: 2, name: 'Isabela', weight: '548.292.874-03', symbol: '98.765.432-1'},
  {position: 3, name: 'Lucas', weight: '934.582.903-40', symbol: '23.456.789-0'},
  {position: 4, name: 'Mariana', weight: '103.847.590-26', symbol: '45.678.901-2'},
  {position: 5, name: 'Gustavo', weight: '938.401.928-37', symbol: '34.567.890-1'},
  {position: 6, name: 'Camila', weight: '584.750.393-04', symbol: '56.789.012-3'},
  {position: 7, name: 'Rafael', weight: '493.847.583-93', symbol: '78.901.234-5'},
  {position: 8, name: 'Amanda', weight: '239.583.948-39', symbol: '67.890.123-4'},
  {position: 9, name: 'Pedro', weight: '387.493.857-30', symbol: '89.012.345-6'},
  {position: 10, name: 'Larissa', weight: '485.937.485-03', symbol: '78.901.234-5'},
  {position: 11, name: 'Thiago', weight: '182.937.485-93', symbol: '90.123.456-7'},
  {position: 12, name: 'Beatriz', weight: '204.958.593-84', symbol: '89.012.345-6'},
  {position: 13, name: 'Julio', weight: '385.938.495-83', symbol: '12.345.678-9'},
  {position: 14, name: 'Carolina', weight: '934.859.384-95', symbol: '56.789.012-3'},
  {position: 15, name: 'Vinicius', weight: '738.475.938-40', symbol: '23.456.789-0'},
  {position: 16, name: 'Fernanda', weight: '203.948.590-58', symbol: '45.678.901-2'},
  {position: 17, name: 'Matheus', weight: '857.395.839-58', symbol: '34.567.890-1'},
  {position: 18, name: 'Marcela', weight: '293.847.584-95', symbol: '78.901.234-5'},
  {position: 19, name: 'Renato', weight: '859.384.758-49', symbol: '67.890.123-4'},
  {position: 20, name: 'Sabrina', weight: '384.759.385-93', symbol: '89.012.345-6'}
];
