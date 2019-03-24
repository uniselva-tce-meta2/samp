import { Router } from '@angular/router';
import { LoginService } from './../security/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samp',
  templateUrl: './samp.component.html',
  styleUrls: ['./samp.component.css']
})
export class SampComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router

  ) { }

  ngOnInit() {
    this.router.navigate(['consulta']);
  }
 
}
