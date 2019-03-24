import { Funcionario } from './../../security/funcionario';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/security/login.service';
import { Component, OnInit } from '@angular/core';
import { AbstractCrudService } from 'src/app/components/services/abstract-crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  funcionario: Funcionario;

  ngOnInit() {
    this.funcionario = this.loginService.getUsuarioAutenticado();
  }

  sair() {
    this.loginService.removeUsuarioAutenticado();
    this.router.navigate(['login']);
  }

  isLogado(){
    return this.loginService.estaLogado();
  }

}
