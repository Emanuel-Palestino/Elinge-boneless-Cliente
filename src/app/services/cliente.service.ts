import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ClienteRegistro } from '../models/ClienteRegistro.model';
import { Direccion } from '../models/Direccion.model';
import { __assign } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
   }

  //recibir modelos de registroUsuario y Direccion 
  registrarCliente(cliente: ClienteRegistro , direccion: Direccion){
    var Respuesta = this.http.post(`${environment.API_URI}/clientes/crear`, cliente).toPromise();

    Respuesta.then((data: any) => {
      console.log(data)
      direccion.idCliente = data.insertId;
      return this.http.post(`${environment.API_URI}/direcciones/crear`, direccion); 

    }).catch(error => {
      console.error(error)
    })
    console.log(direccion)
    

    
  }
}
