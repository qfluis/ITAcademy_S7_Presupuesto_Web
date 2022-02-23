import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {


  webForm: FormGroup;

  get webDetails() {
    return this.presupuestoService.webDetails;
  }     

  constructor(private presupuestoService:PresupuestoService, 
              private _builder:FormBuilder) {
    this.webForm = this._builder.group({
      pages:['',Validators.compose([Validators.required, Validators.min(0), Validators.max(99999)])],
      languages:['',Validators.compose([Validators.required, Validators.min(0), Validators.max(1000)])]
    });
  }

  ngOnInit(): void {
  }

  inputChange() {
    this.presupuestoService.calculateTotalBudget();   
  }

  updateLanguages(event:number){
    this.webDetails.languages = event;
    this.presupuestoService.calculateTotalBudget();
    //console.log(this.webDetails);
  }
  updatePages(event:number){
    this.webDetails.pages = event;
    this.presupuestoService.calculateTotalBudget();
    //console.log(this.webDetails);
  }

}
