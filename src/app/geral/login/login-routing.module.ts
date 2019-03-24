
import { AppComponent } from './../../app.component';
import { SampConsultaComponent } from './../../samp/samp-consulta/samp-consulta.component';
import { AutenticacaoGuard } from './../../security/autenticacao.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'consulta', component: SampConsultaComponent, canActivate: [AutenticacaoGuard], canActivateChild: [AutenticacaoGuard] },
  { path: 'login', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
