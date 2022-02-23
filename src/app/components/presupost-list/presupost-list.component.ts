import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Presupuesto } from 'src/app/interfaces/interfaces';
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

  @ViewChild('search') search!:ElementRef<HTMLInputElement>;

  constructor(private presupuestoService:PresupuestoService) {

  }

  ngOnInit(): void {
  }


  orderByPresupuesto(){
    this.presupuestoService.orderByPresupuesto();     
  }

  orderByFecha(){
    this.presupuestoService.orderByFecha();    
  }  

  orderByOriginal(){
    this.presupuestoService.orderByOriginal();
    this.search.nativeElement.value = "";
  }  

  filtrarPresupuesto() {
    const search:string = this.search.nativeElement.value;
    this.presupuestoService.filtrarPresupuesto(search);
  }
}
