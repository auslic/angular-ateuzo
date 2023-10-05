import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PainelComponent } from './components/painel/painel.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PoemasComponent } from './pages/poemas/poemas.component';
import { ContosComponent } from './pages/contos/contos.component';
import { InacabadosComponent } from './pages/inacabados/inacabados.component';
import { FaleComigoComponent } from './pages/fale-comigo/fale-comigo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PainelComponent,
    HomeComponent,
    CardComponent,
    PoemasComponent,
    ContosComponent,
    InacabadosComponent,
    FaleComigoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
