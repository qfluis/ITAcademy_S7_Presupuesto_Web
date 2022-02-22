import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';



@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {

  @ViewChild ("nombrePresupuesto") nombrePresupuesto!:ElementRef<HTMLInputElement>;
  @ViewChild ("nombreCliente") nombreCliente!:ElementRef<HTMLInputElement>;


  get itemsBudget () {
    return this.presupuestoService.itemsBudget;
  }

  get totalBudget() {
    return this.presupuestoService.totalBudget;
  }
  
  constructor(private presupuestoService:PresupuestoService) {}

  ngOnInit(): void {
  }

  updateBudget(){    
    this.presupuestoService.calculateTotalBudget();    
  }
  guardarPresupuesto(){   
    if (this.totalBudget > 0) {
      const nombrePresupuesto = (this.nombrePresupuesto.nativeElement.value) ? this.nombrePresupuesto.nativeElement.value: "No especificado";
      const nombreCliente = (this.nombreCliente.nativeElement.value) ? this.nombreCliente.nativeElement.value: "No especificado";
      this.presupuestoService.guardarPresupuesto(nombrePresupuesto, nombreCliente); 

      this.presupuestoService.resetPresupuesto();
      this.nombrePresupuesto.nativeElement.value = "";
      this.nombreCliente.nativeElement.value = "";
    }   
  }
}
