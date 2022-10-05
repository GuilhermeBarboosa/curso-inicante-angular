import { Transferencia } from './../model/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(
    private transferenciaService: TransferenciasService,
    private router: Router
  ) {}

  transferir() {
    //this.aoTransferir.emit({valor: this.valor, destino: this.destino});

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.transferenciaService.adiciona(valorEmitir).subscribe(
      (response) => {
        console.log(response);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
