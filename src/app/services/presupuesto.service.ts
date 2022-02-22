import { Injectable } from '@angular/core';
import { ItemsBudget, Presupuesto, WebDetails } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  listaPresupuestos:Presupuesto[] = [
      {
          "nombreCliente": "Luis",
          "nombrePresupuesto": "Web básica",
          "itemsBudget": {
              "web": {
                  "checked": true,
                  "price": 500
              },
              "seo": {
                  "checked": false,
                  "price": 300
              },
              "ads": {
                  "checked": false,
                  "price": 200
              }
          },
          "webDetails": {
              "pages": 1,
              "languages": 1
          },
          "totalBudget": 530,
          "fecha": "2022-02-15"
      },
      {
          "nombreCliente": "XYZ",
          "nombrePresupuesto": "Web corporativa",
          "itemsBudget": {
              "web": {
                  "checked": true,
                  "price": 500
              },
              "seo": {
                  "checked": true,
                  "price": 300
              },
              "ads": {
                  "checked": true,
                  "price": 200
              }
          },
          "webDetails": {
              "pages": 10,
              "languages": 8
          },
          "totalBudget": 3400,
          "fecha": "2022-02-22"
      },
      {
          "nombreCliente": "Microsoft",
          "nombrePresupuesto": "Consultoria SEO",
          "itemsBudget": {
              "web": {
                  "checked": false,
                  "price": 500
              },
              "seo": {
                  "checked": true,
                  "price": 300
              },
              "ads": {
                  "checked": false,
                  "price": 200
              }
          },
          "webDetails": {
              "pages": 1,
              "languages": 1
          },
          "totalBudget": 300,
          "fecha": "2022-02-20"
      },
      {
          "nombreCliente": "Facebook",
          "nombrePresupuesto": "Publi",
          "itemsBudget": {
              "web": {
                  "checked": false,
                  "price": 500
              },
              "seo": {
                  "checked": false,
                  "price": 300
              },
              "ads": {
                  "checked": true,
                  "price": 200
              }
          },
          "webDetails": {
              "pages": 1,
              "languages": 1
          },
          "totalBudget": 200,
          "fecha": "2022-02-19"
      },
      {
        "nombreCliente": "Microsoft",
        "nombrePresupuesto": "Consultoria SEO + Adds",
        "itemsBudget": {
            "web": {
                "checked": false,
                "price": 500
            },
            "seo": {
                "checked": true,
                "price": 300
            },
            "ads": {
                "checked": true,
                "price": 200
            }
        },
        "webDetails": {
            "pages": 1,
            "languages": 1
        },
        "totalBudget": 500,
        "fecha": "2022-02-10"
    }  
  ];

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

  constructor() {
  }

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
  guardarPresupuesto(nombrePresupuesto:string, nombreCliente:string) {
    const today:Date = new Date();
    //const fecha:string = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDay();
    const fecha = today.toISOString().split("T")[0];
    this.listaPresupuestos.push(
      {
        nombreCliente: nombreCliente,
        nombrePresupuesto: nombrePresupuesto,
        itemsBudget: this.itemsBudget,
        webDetails: this.webDetails,
        totalBudget: this.totalBudget,
        fecha: fecha
      }
    );
    console.log(this.listaPresupuestos);
    this.orderByOriginal();
  }
  resetPresupuesto(){
    this.itemsBudget = {
      web: {checked: false, price: 500},
      seo: {checked: false, price: 300},
      ads: {checked: false, price: 200}
    }
    this.webDetails = {
      pages: 1,
      languages: 1
    };
    this.totalBudget = 0;
  }
  orderByPresupuesto () {
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
  orderByDate () {
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
  orderByOriginal () {
    this.orderByDate();
    this.orderByPresupuesto()
    this.orderByNombre()
    
  }
}
