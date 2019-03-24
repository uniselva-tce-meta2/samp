import { SampCadastroComponent } from './samp-cadastro/samp-cadastro.component';
import { SampConsultaComponent } from './samp-consulta/samp-consulta.component';
import { LoginComponent } from '../geral/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: 'cadastro/:id', component: SampCadastroComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampRoutingModule { }
