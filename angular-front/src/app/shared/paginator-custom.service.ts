import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class PaginatorCustomService {

  constructor() { }

  translateMatPaginator(paginator: MatPaginator) {
    paginator._intl.firstPageLabel = 'Primeira página';
    paginator._intl.itemsPerPageLabel = 'Itens por página:';
    paginator._intl.lastPageLabel = 'Última página';
    paginator._intl.nextPageLabel = 'Próxima página';
    paginator._intl.previousPageLabel = 'Página anterior';
  }
}
