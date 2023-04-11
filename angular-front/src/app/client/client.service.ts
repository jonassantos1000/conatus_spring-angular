import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly API = 'http://localhost:8080/users';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Client[]>(this.API);
  }

}
