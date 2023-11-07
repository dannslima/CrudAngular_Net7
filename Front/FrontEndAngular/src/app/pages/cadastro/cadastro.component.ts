import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao="Cadastrar"
  btnTitulo="Cadastrar Funcionário"

  constructor(private funcionarioService: FuncionarioService, private router: Router) { 

  }

  createFuncionario(funcionario: Funcionario) {
     this.funcionarioService.createFuncionario(funcionario).subscribe(() => {
        this.router.navigate(['/'])
      }
    )    
  }
}
