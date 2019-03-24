import { Funcionario } from './../../security/funcionario';
import { LoginService } from './../../security/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  login: any = {};
  funcionario: Funcionario;

  ngOnInit() {
    if (this.service.estaLogado()) {
      this.router.navigate(['consulta']);
    }
  }

  logarUsuario() {

    this.service.entrar(this.login.login, this.login.senha)
      .subscribe((dados) => {
        this.funcionario = dados;
        this.service.setUsuarioAutenticado(this.funcionario)
        this.router.navigate(['consulta']);
      }, (error) => {
        if (error.status != 401 && error.status != 403 && error.status != 407 && error.status != 504) {
          if (error && error.error) {
            console.log("Usuário ou senha estão incorretos!")
            //this.msg.nofiticationWarning(JSON.stringify(error.error.message));
          } else {
            console.log("Usuário ou senha estão incorretos!")
            //this.msg.nofiticationWarning(JSON.stringify(error));
          }
        } else {
          console.log("Usuário ou senha estão incorretos!")

        }
      }
      );

  }


}
