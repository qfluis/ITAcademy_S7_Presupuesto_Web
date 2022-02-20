import { Component, OnInit } from '@angular/core';
import { ItemsBudget } from './interfaces';



@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {

  itemsBudget:ItemsBudget = {
    web: {checked: false, price: 500},
    seo: {checked: false, price: 300},
    ads: {checked: false, price: 200}
  }

  totalBudget:number = 0;
  
  constructor() {}

  ngOnInit(): void {
  }

  calculateTotalBudget(event:Event){
    let total:number = 0;
    const items = this.itemsBudget;

    if (items.web.checked) total+=items.web.price;
    if (items.seo.checked) total+=items.seo.price;
    if (items.ads.checked) total+=items.ads.price;

    this.totalBudget = total;

    /*
    for(let elem in this.itemsBudget){
      if (this.itemsBudget.hasOwnProperty(elem)){
        console.log(this.itemsBudget[elem]);
      }      
    }
    this.totalBudget = total;
    */

    
    
  }

}
