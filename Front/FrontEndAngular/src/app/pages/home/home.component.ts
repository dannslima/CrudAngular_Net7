import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

funcionarios: Funcionario[] = [];
funcionariosGeral: Funcionario[] = [];

colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir'];


  constructor(private funcionarioService: FuncionarioService, public dialog: MatDialog){}

  //tudo que tem dentro do ngOnInit vai ser executada assim que apagina for chamada
  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe(data => {
      const dados  = data.dados;
      
      dados.map((item) => {
          item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
          item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })

      console.log(this.funcionarios);

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;
      
    });
  }

  search(event : Event){
    const target = event.target as HTMLInputElement
    const value = target.value;
    
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLocaleLowerCase().includes(value);
    });
  }

  OpenDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }

}
