import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(
    private presupuestoService:PresupuestoService, 
    private router: Router) {}

  ngOnInit(): void {
    this.cargarParametros()


  }

  cargarParametros(){
    const params = this.router.parseUrl(this.router.url).queryParams;
    if (params["web"] == "true") this.presupuestoService.itemsBudget.web.checked = true;
    if (params["seo"] == "true") this.presupuestoService.itemsBudget.seo.checked = true;
    if (params["ads"] == "true") this.presupuestoService.itemsBudget.ads.checked = true;

    
    const pages = parseInt(params["pages"]);
    const languages = parseInt(params["languages"]);

    if (pages > 0) this.presupuestoService.webDetails.pages = pages;
    if (languages > 0) this.presupuestoService.webDetails.languages = languages;
    

    this.presupuestoService.calculateTotalBudget();
    console.log(this.presupuestoService.webDetails);
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
