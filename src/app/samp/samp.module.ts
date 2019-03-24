import { NavbarComponent } from './../geral/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './../geral/login/login.module';
import { SampComponent } from './samp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampRoutingModule } from './samp-routing.module';
import { SampConsultaComponent } from './samp-consulta/samp-consulta.component';
import { SampCadastroComponent } from './samp-cadastro/samp-cadastro.component';


@NgModule({
  imports: [
    CommonModule,
    SampRoutingModule,
    LoginModule,
    FormsModule

  ],
  declarations: [
    SampComponent,
    SampConsultaComponent,
    SampCadastroComponent,
    NavbarComponent
  ],
  exports: [
  ]
})
export class SampModule { }
