import { Component, OnInit } from '@angular/core';
import { WebDetails } from './interfaces';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  get webDetails() {
    return this.presupuestoService.webDetails;
  }     

  constructor(private presupuestoService:PresupuestoService) { }

  ngOnInit(): void {
  }

  inputChange() {
    this.presupuestoService.calculateTotalBudget();   
  }

}
