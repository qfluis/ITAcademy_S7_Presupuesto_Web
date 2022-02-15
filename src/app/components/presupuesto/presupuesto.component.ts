import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {
  totalBudget:number = 0;
  /*webPrice:number = 0;
  seoPrice:number = 0;
  addsPrice:number = 0;*/

  constructor() {}

  ngOnInit(): void {
  }

  calculateTotalBudget(event:Event){
    const element:any = event.target;
    if(element.checked) {
      this.totalBudget += parseInt(element.value);
    } else {
      this.totalBudget -= parseInt(element.value);
    }    
  }

}
