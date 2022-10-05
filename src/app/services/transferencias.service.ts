import { Transferencia } from './../model/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciasService {
  private transferencias: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.transferencias = [];
  }

  getTransferencias() {
    return this.transferencias;
  }

  getAll(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  // adicionaTransferencia(transferencia: any) {
  //   this.novaData(transferencia);
  //   this.transferencias.push(transferencia);
  // }

  adiciona(transferencia: Transferencia): Observable<Transferencia> {
    this.novaData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  novaData(transferencia: any) {
    transferencia.data = new Date();
  }
}
