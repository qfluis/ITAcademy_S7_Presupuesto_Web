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

  constructor(private presupuestoService:PresupuestoService) { }

  ngOnInit(): void {
  }

}
