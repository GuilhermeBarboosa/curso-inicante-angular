import { NovaTransferenciaComponent } from './nova-trasnferencia/nova-trasnferencia.componente';
import { ExtratoComponent } from './extrato/extrato.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'extrato',
    component: ExtratoComponent,
  },
  {
    path: 'nova-transferencia',
    component: NovaTransferenciaComponent,
  },
  {
    path: '',
    redirectTo: 'extrato',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
