import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent implements OnInit {
  nombreImagen: string = '';

  constructor(private _imagenesService: ImagenesService) { }

  ngOnInit(): void {
  }

  buscarImagen(){
    if (this.nombreImagen === '') {
      this._imagenesService.setError('Agrega un texto de busqueda');
      return;
    }

    this._imagenesService.enviarTerminoBusqueda(this.nombreImagen )
      
    }


  }

