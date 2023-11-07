import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionarios.service';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

  funcionario?: Funcionario;
  id!: number ;

  constructor(private funcionarioService: FuncionarioService, private route:ActivatedRoute
    , private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.getFuncionario(this.id).subscribe(funcionario => {
      
      const dados = funcionario.dados;

      dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString('pt-BR');
      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString('pt-BR');
      
      this.funcionario = funcionario.dados;
    }
  )};

  InativaFuncionario(){
    this.funcionarioService.InativaFuncionario(this.id).subscribe(
      (data) => {
        this.router.navigate(['/']);
      }
    )
  }
}
