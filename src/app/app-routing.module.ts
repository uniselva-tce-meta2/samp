import { SampCadastroComponent } from './samp/samp-cadastro/samp-cadastro.component';
import { LoginComponent } from './geral/login/login.component';
import { AutenticacaoGuard } from './security/autenticacao.guard';
import { SampConsultaComponent } from './samp/samp-consulta/samp-consulta.component';
import { SampComponent } from './samp/samp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SampComponent, children: [
      {
        path: 'consulta', component: SampConsultaComponent, canActivate:[AutenticacaoGuard] , canActivateChild: [AutenticacaoGuard]
      },
      {
        path: 'cadastro/:id', component: SampCadastroComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
