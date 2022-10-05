import { Transferencia } from './../model/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: any[];

  constructor(private transferenciaService: TransferenciasService) { }

  ngOnInit(): void {
    this.transferenciaService.getAll().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
