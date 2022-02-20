import { Component, OnInit } from '@angular/core';
import { ItemsBudget } from './interfaces';
import { PresupuestoService } from '../../services/presupuesto.service';



@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {

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
}
