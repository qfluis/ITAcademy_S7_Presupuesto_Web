import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { SelectorNumericoComponent } from './components/selector-numerico/selector-numerico.component';
import { PresupuestoPageComponent } from './pages/presupuesto/presupuesto-page.component';
import { PresupostListComponent } from './components/presupost-list/presupost-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoComponent,
    HomeComponent,
    PanelComponent,
    SelectorNumericoComponent,
    PresupuestoPageComponent,
    PresupostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
