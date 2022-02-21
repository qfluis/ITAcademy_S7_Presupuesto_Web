import { Injectable } from '@angular/core';
import { WebDetails } from '../components/panel/interfaces';
import { ItemsBudget } from '../components/presupuesto/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  totalBudget:number = 0;

  itemsBudget:ItemsBudget = {
    web: {checked: false, price: 500},
    seo: {checked: false, price: 300},
    ads: {checked: false, price: 200}
  }

  webDetails: WebDetails = {
    pages: 1,
    languages: 1
  };

  constructor() { }

  calculateTotalBudget() {
    
    let total:number = 0;    
    const items = this.itemsBudget;

    // Reactive Forms ¿?

    if(this.webDetails.languages<1) this.webDetails.languages = 1;
    if(this.webDetails.pages<1) this.webDetails.pages = 1 ;

    if (items.web.checked){
      total+=items.web.price + (this.webDetails.pages * this.webDetails.languages * 30);
    } else {
      this.webDetails.languages = 1;
      this.webDetails.pages = 1;
    }
    if (items.seo.checked) total+=items.seo.price;
    if (items.ads.checked) total+=items.ads.price;

    this.totalBudget = total;

    /*
    for(let value in this.itemsBudget){
      if (this.itemsBudget.hasOwnProperty(value)){
        console.log(this.itemsBudget[value]);
      }      
    }
    this.totalBudget = total;
    */
  }

  /* BORRAR
  updateBudget(itemsBudget: ItemsBudget) {
    this.itemsBudget = itemsBudget;
    this.calculateTotalBudget();
  }

  updateWebDetails(webDetails: WebDetails) {
    if(webDetails.languages<1) webDetails.languages = 1;
    if(webDetails.pages<1) webDetails.pages = 1 
    this.webDetails = webDetails;    
    this.calculateTotalBudget();
  }
  */
}
