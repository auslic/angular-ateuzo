import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoemasComponent } from './pages/poemas/poemas.component';
import { ContosComponent } from './pages/contos/contos.component';
import { InacabadosComponent } from './pages/inacabados/inacabados.component';
import { FaleComigoComponent } from './pages/fale-comigo/fale-comigo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'poemas',
    component: PoemasComponent,

  },
  {
    path: 'contos',
    component: ContosComponent
  },
  {
    path: 'inacabados',
    component: InacabadosComponent
  },
  {
    path: 'fale_comigo',
    component: FaleComigoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
