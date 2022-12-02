import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  texto: string = '';
  mostrar: boolean = false;
  suscripcion: Subscription;


  constructor(private _imagenesService: ImagenesService) {
    this.suscripcion = this._imagenesService.getError().subscribe(data => {
      this.mostrarMensaje();
      this.texto = data;
    })
  }

  ngOnInit(): void {
  }

  mostrarMensaje() {
    this.mostrar = true;
    setInterval(() => {
      this.mostrar = false;
    }, 3000)


  }

}
