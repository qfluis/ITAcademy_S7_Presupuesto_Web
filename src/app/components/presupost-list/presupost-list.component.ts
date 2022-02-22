import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupost-list',
  templateUrl: './presupost-list.component.html',
  styleUrls: ['./presupost-list.component.scss']
})
export class PresupostListComponent implements OnInit {

  get listaPresupuestos () {
    return this.presupuestoService.listaPresupuestos;
  }

  constructor(private presupuestoService:PresupuestoService) {
    this.presupuestoService.orderByOriginal();
  }

  ngOnInit(): void {
  }

  orderByPresupuesto(){
    this.presupuestoService.orderByPresupuesto();
  }
  orderByFecha(){
    this.presupuestoService.orderByDate();
  }
  orderByOriginal(){
    this.presupuestoService.orderByOriginal();
  }

}
