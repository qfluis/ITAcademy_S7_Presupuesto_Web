import { Injectable } from '@angular/core';
import { ItemsBudget, Presupuesto, WebDetails } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  listaPresupuestos:Presupuesto[] = [];    // vista     
  listaPresupuestosBD:Presupuesto[] = [];   // datos

  ultimoFiltro:string = "";

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
    
    this.listaPresupuestosBD = JSON.parse(localStorage.getItem("listaPresupuestos") || "[]");
    this.listaPresupuestos = [...this.listaPresupuestosBD];
  }

  calculateTotalBudget() {
    
    let total:number = 0;    
    const items = this.itemsBudget;

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
    
  }
  guardarPresupuesto(nombrePresupuesto:string, nombreCliente:string) {
    const today:Date = new Date();
    const fecha = today.toISOString().split("T")[0] + " " + today.toISOString().split("T")[1].substring(0,8);
    const item:Presupuesto = {
      nombreCliente: nombreCliente,
      nombrePresupuesto: nombrePresupuesto,
      itemsBudget: this.itemsBudget,
      webDetails: this.webDetails,
      totalBudget: this.totalBudget,
      fecha: fecha
    }
    this.listaPresupuestosBD.push(item);
    this.listaPresupuestos.push(item);
    localStorage.setItem("listaPresupuestos",JSON.stringify(this.listaPresupuestosBD));

    this.filtrarPresupuesto(this.ultimoFiltro);
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

  orderByPresupuesto(){
    this.listaPresupuestos = this.listaPresupuestos.sort((a:Presupuesto, b:Presupuesto)=>{
      const nom1:string = a.nombrePresupuesto.toLowerCase();
      const nom2:string = b.nombrePresupuesto.toLowerCase();
      if(nom1 > nom2){
        return 1;
      } else if (nom1 < nom2) {
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
  
  orderByOriginal(){
    this.listaPresupuestos = [...this.listaPresupuestosBD];   
    this.ultimoFiltro = ""; 
  }

  filtrarPresupuesto(palabra:string) {
    this.ultimoFiltro = palabra;
    this.listaPresupuestos = this.listaPresupuestosBD.filter((item:Presupuesto)=>{
      return item.nombrePresupuesto.toLowerCase().includes(palabra.toLowerCase());
    });
  }



}
