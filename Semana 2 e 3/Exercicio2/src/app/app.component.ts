import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Sistema | Cadastro de funcinários: ';
  Funcionario : Pessoa = { id: 7, nome: 'Nathan Carlos Exercicio', salario: 4500, cargo: 'Dev Pl' }
}

interface Pessoa {
  id: number
  nome: string
  salario : number
  cargo : string
}
