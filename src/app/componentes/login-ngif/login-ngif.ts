import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [NgClass, NgIf, FormsModule],
  selector: 'app-login-ngif',
  styleUrl: './login-ngif.css',
  templateUrl: './login-ngif.html',
})
export class LoginNgif {
  logado:boolean = false;
  login:string = "";
  senha:string = "";
  logar(){
    this.logado = this.login=="admin" && this.senha=="admin";
  }
  deslogar(){
    this.logado = false;
  }
}
