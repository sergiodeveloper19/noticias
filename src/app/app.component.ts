import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'noticias';
  listNoticias:any[] = [];
  loading= false;

  constructor(private _noticiaService: NoticiaService) {

  }

  buscarNoticias(parametros: any) {
    this.loading = true;
    this._noticiaService.getNoticias(parametros).subscribe(data =>{
      this.loading=false;
      console.log(data);
      this.listNoticias = data.articles;

    }, error =>{
      console.log(error);
      this.loading=false;
    })
  }
}
