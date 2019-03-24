import { Funcionario } from './funcionario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * Método de autenticacao
   * @param login Login a ser autenticado
   * @param senha Senha do usuario
   */
  entrar(login: string, senha: string): Observable<Funcionario> {
    const dados = {
      "login": login,
      "senha": senha,
      "sistema": "redmine"
    };

    let headersLogin = new HttpHeaders;

    headersLogin = headersLogin.set('Content-Type', 'application/json');

    return this.http.post<Funcionario>('/login', JSON.stringify(dados), { headers: headersLogin });
  }


  estaLogado() {
    // if (this.getKeyUsuario() != null) {
    //   return true;
    // }
    // return false;
    return true;
  }

  getUsuarioAutenticado() {
    const json = localStorage.getItem('funcionarioAutenticado');
    const usuarioAutenticado: Funcionario = JSON.parse(json)
    return usuarioAutenticado;
  }

  setUsuarioAutenticado(funcionario: Funcionario) {
    if (funcionario != null) {
      localStorage.setItem('funcionarioAutenticado', JSON.stringify(funcionario))
    }
  }

  removeUsuarioAutenticado() {
    localStorage.removeItem("funcionarioAutenticado");
  }

  setKeyUsuario(chave: string) {
    localStorage.setItem("chave_usuario", chave);
  }

  removeKeyUsuario() {
    localStorage.removeItem("chave_usuario");
  }

  getKeyUsuario() {
    let funcionario: Funcionario;
    funcionario = this.getUsuarioAutenticado();

    if (funcionario != null) {
      return funcionario.api_key;
    }
    return null;
  }

  /**
   * Salva login nos cookies
   * @param login Login do usuário
   */
  setLoginLembrar(login: string) {
    localStorage.setItem("login_lembrar", login);
  }

  getLoginLembrar() {
    return localStorage.getItem("login_lembrar");
  }

  removeLoginLembrar() {
    localStorage.removeItem("login_lembrar");
  }



}
