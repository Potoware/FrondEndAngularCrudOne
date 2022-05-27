import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of, map} from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class ClienteService {

  constructor(private http: HttpClient) { }
  private urlEndpoint:string = 'http://192.168.0.100:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
getClientes():Observable <Cliente[]> {
  //return of(CLIENTES);
  return this.http.get(this.urlEndpoint).pipe(
    map(response => response as Cliente[])
  );
};

create(cliente: Cliente) : Observable<Cliente>{
  return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers: this.httpHeaders});
}

getCliente(id): Observable<Cliente>{
  return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`);
}

update(cliente: Cliente): Observable<Cliente>{
  return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`, cliente,{headers: this.httpHeaders});
}

delete(id: number): Observable<Cliente>{
  return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders});
}

}
