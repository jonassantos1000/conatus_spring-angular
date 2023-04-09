import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PaginatorCustomService } from '../shared/paginator-custom.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
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
  {position: 1, name: 'Shampoo anti-resíduos', weight: 'R$ 28,90', symbol: 'Ativo'},
  {position: 2, name: 'Máscara hidratante', weight: 'R$ 42,50', symbol: 'Inativo'},
  {position: 3, name: 'Condicionador reparador', weight: 'R$ 35,99', symbol: 'Inativo'},
  {position: 4, name: 'Óleo para cabelos', weight: 'R$ 18,75', symbol: 'Inativo'},
  {position: 5, name: 'Spray para volume', weight: 'R$ 24,99', symbol: 'Inativo'},
  {position: 6, name: 'Finalizador de cachos', weight: 'R$ 39,90', symbol: 'Ativo'},
  {position: 7, name: 'Tônico capilar', weight: 'R$ 55,00', symbol: 'Ativo'},
  {position: 8, name: 'Creme para pentear', weight: 'R$ 21,80', symbol: 'Inativo'},
  {position: 9, name: 'Shampoo seco', weight: 'R$ 32,25', symbol: 'Inativo'},
  {position: 10, name: 'Spray fixador', weight: 'R$ 19,99', symbol: 'Inativo'},
  {position: 11, name: 'Coloração permanente', weight: 'R$ 64,90', symbol: 'Inativo'},
  {position: 12, name: 'Máscara matizadora', weight: 'R$ 52,00', symbol: 'Inativo'},
  {position: 13, name: 'Leave-in protetor', weight: 'R$ 29,90', symbol: 'Inativo'},
  {position: 14, name: 'Shampoo para cabelos oleosos', weight: 'R$ 15,75', symbol: 'Inativo'},
  {position: 15, name: 'Gel modelador', weight: 'R$ 17,50', symbol: 'Ativo'},
  {position: 16, name: 'Sérum reparador de pontas', weight: 'R$ 23,99', symbol: 'Inativo'},
  {position: 17, name: 'Creme alisante', weight: 'R$ 59,90', symbol: 'Inativo'},
  {position: 18, name: 'Spray para brilho', weight: 'R$ 27,50', symbol: 'Inativo'},
  {position: 19, name: 'Tratamento reconstrutor', weight: 'R$ 75,00', symbol: 'Ativo'},
  {position: 20, name: 'Shampoo para cabelos secos', weight: 'R$ 19,99', symbol: 'Ativo'}
]

