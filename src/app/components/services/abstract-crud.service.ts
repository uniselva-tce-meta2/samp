import { HttpClient } from '@angular/common/http';
import { LoginService } from './../../security/login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbstractCrudService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService

  ) { }


  getIssues() {
    return this.http.get('/redmine/issues.json?assigned_to_id=me&key=' + this.loginService.getKeyUsuario());
  }

  getProjetos(){
    return this.http.get('/redmine/projects.json');
  }

  getIssue(id: number){
    return this.http.get('/redmine/issues/'+id+'.json?key=' + this.loginService.getKeyUsuario());
  }
}
