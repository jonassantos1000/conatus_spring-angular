import { ClientService } from './client.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginatorCustomService } from '../shared/paginator-custom.service';
import { Client } from './client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource = new MatTableDataSource<Client>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private paginatorCustom: PaginatorCustomService, private service: ClientService) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  ngAfterViewInit() {
    this.paginatorCustom.translateMatPaginator(this.paginator)
    this.dataSource.paginator = this.paginator;
  }

  onRefresh(){
    this.service.list()
    .subscribe(dados => {
      this.dataSource.data = dados;
    });
  }
}
