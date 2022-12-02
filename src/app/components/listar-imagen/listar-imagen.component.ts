import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
  termino: string = '';
  subscription: Subscription;
  listImagenes: any[] = [];
  loading: boolean = false;
  imagenesPorPaginas: number = 30;
  paginaActual: number = 1;
  calcularTotalPaginas: number =0;

  constructor(private _imagenesService: ImagenesService) {
    this.subscription = this._imagenesService.getTerminoBusqueda().subscribe(data =>{
      this.loading = true;
      this.termino = data;
      this.obtenerImagenes();
      
    })
   }

  ngOnInit(): void {
  }


  obtenerImagenes(){
    this.listImagenes =[]
    this._imagenesService.getImagenes(this.termino).subscribe( ({hits, totalHits}) =>{
      this.loading = false;
      
      if(hits.length === 0 ){
        this._imagenesService.setError('No encontramos ningun resultado');
        this.loading = false;
        return;
      }
    
      //Paginacion.
      this.calcularTotalPaginas = Math.ceil(totalHits/this.imagenesPorPaginas);
      

      this.listImagenes = hits;
    }, error =>{
      this._imagenesService.setError('Ocurrior un errror');
      this.loading = false;
    })

  } 


  paginaAnterior(){
    this.paginaActual -= 1;
  }

  paginaSiguiente(){
    this.paginaActual += 1;
  }
  }



