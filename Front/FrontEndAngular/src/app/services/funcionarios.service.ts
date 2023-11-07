import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/Funcionarios';
import {Response} from '../models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl =`${environment.ApiUrl}/Funcionario`;

  constructor(private http: HttpClient) { }

  getFuncionarios() : Observable<Response<Funcionario[]>>{
      return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  getFuncionario(id: number): Observable<Response<Funcionario>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Funcionario>>(url);
  }

  createFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>>
  {
    return this.http.post<Response<Funcionario[]>>(this.apiUrl, funcionario);
  }

  EditarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario>>
  {
    return this.http.put<Response<Funcionario>>(this.apiUrl, funcionario);
  }

  InativaFuncionario(id: Number) : Observable<Response<Funcionario>>
  {
    const url = `${this.apiUrl}/InativaFuncionario/${id}`;
    return this.http.put<Response<Funcionario>>(url, id);
  }

  ExcluirFuncionario(id: Number) : Observable<Response<Funcionario[]>>
  {
    const url = (`${this.apiUrl}?id=${id}`);
    return this.http.delete<Response<Funcionario[]>>(url);
  }

}
