import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DespesaMes, DespesaFonte, DespesaCategoria } from '../despesa/despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  
  private apiUrl = 'https://challenge.cfapps.io/api/v1/despesas/';

  // private apiUrl = 'http://localhost:8080/api/v1/despesas/';

  constructor(private http: HttpClient) {
  }

  getListaDespesaPorMes(): Observable<DespesaMes[]> {
    const url = this.apiUrl + 'mes';
    console.log("URL :: ", url);
    return this.http.get<DespesaMes[]>(url);
  }

  getListaDespesaPorFontes(): Observable<DespesaFonte[]> {
    const url = this.apiUrl + 'fonte';
    console.log("URL :: ", url);
    return this.http.get<DespesaFonte[]>(url);
  }

  getListaDespesaPorCategoria(): Observable<DespesaCategoria[]> {
    const url = this.apiUrl + 'categoria';
    console.log("URL :: ", url);
    return this.http.get<DespesaCategoria[]>(url);
  }
}
