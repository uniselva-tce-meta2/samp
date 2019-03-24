import { AbstractCrudService } from './../../components/services/abstract-crud.service';
import { Atividade } from './../../models/Samp';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/security/login.service';
import { Funcionario } from './../../security/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samp-cadastro',
  templateUrl: './samp-cadastro.component.html',
  styleUrls: ['./samp-cadastro.component.css']
})
export class SampCadastroComponent implements OnInit {


  atividade: Atividade;
  idAtividade: number;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private crudService: AbstractCrudService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params) => {
    //     this.idAtividade = params['id']
    //   }
    // );
    // this.crudService.getIssue(this.idAtividade).subscribe(
    //   (retorno: any) => {
    //     this.atividade = retorno.issue;
    //   }
    // );

  }

  sair() {
    this.loginService.removeUsuarioAutenticado();
    this.router.navigate(['login']);
  }

  voltar() {
    this.router.navigate(['consulta']);
  }


}
