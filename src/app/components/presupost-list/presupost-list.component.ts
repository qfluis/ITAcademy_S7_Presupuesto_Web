import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Presupuesto } from 'src/app/interfaces/interfaces';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupost-list',
  templateUrl: './presupost-list.component.html',
  styleUrls: ['./presupost-list.component.scss']
})
export class PresupostListComponent implements OnInit {

  
  get listaPresupuestosOriginal () {
    return this.presupuestoService.listaPresupuestos;
  }
  listaPresupuestos = [...this.listaPresupuestosOriginal];

  @ViewChild('search') search!:ElementRef<HTMLInputElement>;

  constructor(private presupuestoService:PresupuestoService) {
    //this.orderByOriginal();
  }

  ngOnInit(): void {
  }

  orderByPresupuesto(){
    this.listaPresupuestos = this.listaPresupuestos.sort((a:Presupuesto, b:Presupuesto)=>{
      if(a.nombrePresupuesto > b.nombrePresupuesto){
        return 1;
      } else if (a.nombrePresupuesto < b.nombrePresupuesto) {
        return -1;
      } else {
        return 0;
      }
    });   
  }
  orderByFecha(){
    this.listaPresupuestos = this.listaPresupuestos.sort((a:Presupuesto, b:Presupuesto)=>{
      if(a.fecha < b.fecha){
        return 1;
      } else if (a.fecha > b.fecha) {
        return -1;
      } else {
        return 0;
      }
    }); 
  }
  orderByNombre () {
    this.listaPresupuestos = this.listaPresupuestos.sort((a:Presupuesto, b:Presupuesto)=>{
      if(a.nombreCliente > b.nombreCliente){
        return 1;
      } else if (a.nombreCliente < b.nombreCliente) {
        return -1;
      } else {
        return 0;
      }
    });    
  }
  orderByOriginal(){
    this.listaPresupuestos = [...this.listaPresupuestosOriginal];
    
    this.search.nativeElement.value = "";
    // Da error la applicación

    
    //this.orderByFecha();
    //this.orderByPresupuesto();
    //this.orderByNombre(); 
  }

  filtrarPresupuesto() {
    this.listaPresupuestos = [...this.listaPresupuestosOriginal];
    const palabra = this.search.nativeElement.value;
    this.listaPresupuestos = this.listaPresupuestos.filter((item:Presupuesto)=>{
      return item.nombrePresupuesto.toLowerCase().includes(palabra.toLowerCase());
    });
  }
}
