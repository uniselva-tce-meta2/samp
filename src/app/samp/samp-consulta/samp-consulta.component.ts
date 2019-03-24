import { Atividade, Projeto } from './../../models/Samp';
import { AbstractCrudService } from './../../components/services/abstract-crud.service';
import { Funcionario } from './../../security/funcionario';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/security/login.service';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-samp-consulta',
  templateUrl: './samp-consulta.component.html',
  styleUrls: ['./samp-consulta.component.css'],
  
})
export class SampConsultaComponent  implements OnInit {

  atividades: Atividade[];
  projetos: Projeto[];


  itemSelelcionado: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private crudService: AbstractCrudService
  ){}

 

  ngOnInit() {
  
    // this.crudService.getIssues().subscribe(
    //   (retorno: any) => {
    //     this.atividades = retorno.issues;
    //   }
    // );
    // this.crudService.getProjetos().subscribe(
    //   (retorno: any) => {
    //     this.projetos = retorno.projects;
    //   }
    // );

  
    
  
  }
 
}
