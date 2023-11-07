import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionarios.service';
import { Inject } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputdata: any;
  funcionario!: Funcionario;

  constructor(
    private FuncionarioService: FuncionarioService, 
    private Router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, //pra receber o id passado pro modal
    private ref: MatDialogRef<ExcluirComponent> //tipo herda as funcionalidades do componente


  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;

    this.FuncionarioService.getFuncionario(this.inputdata.id).subscribe(data => {
      this.funcionario = data.dados;

      console.log(this.funcionario);
    });
  }

  ExcluirFuncionario() {
    this.FuncionarioService.ExcluirFuncionario(this.inputdata.id).subscribe(data => {
      this.ref.close();
      alert("Funcionário excluído com sucesso!");
      window.location.reload();
    });
  }

  CancelarModal(){
    this.ref.close();
  }

}
