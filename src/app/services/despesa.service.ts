import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../despesa/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private apiUrl = 'https://challenge.cfapps.io/api/v1/despesas/';

  // private apiUrl = '/api/v1/despesas/';

  constructor(private http: HttpClient) {
  }

  getListaDespesaPorMes(): Observable<Despesa[]> {
    const url = this.apiUrl + 'mes';
    console.log("URL :: ", url);
    return this.http.get<Despesa[]>(url);
  }  
}
