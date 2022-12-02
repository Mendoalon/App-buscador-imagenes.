import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  private $error = new Subject<string>();
  private $terminoBusqueda = new Subject<string>();

  constructor( private Http: HttpClient) { }

  setError(mensaje: string) {
    this.$error.next(mensaje);
  }

  getError(): Observable<string> {
      return this.$error.asObservable();
    }

    enviarTerminoBusqueda(termino: string){
      this.$terminoBusqueda.next(termino);

    }

    getTerminoBusqueda(): Observable<string> {

      return this.$terminoBusqueda.asObservable();
    }

    getImagenes(termino: string):Observable<any> {
      const KEY = '27083919-3c5c96a3e7bb0128404bb36e9'
      const URL = `https://pixabay.com/api/?key=${KEY}&q=${termino}`

      console.log(URL);
      

      return this.Http.get(URL)
     }
}
