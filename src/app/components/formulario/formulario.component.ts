import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSelecionados = new EventEmitter<any>();

  categoriaSelecionada = 'general';
  paisSelecionado = 'ar';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'technology', nombre: 'Tecnologia' },
  ];

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'gb', nombre: 'Reino Unido' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia() {
   const PARAMETROS ={
    categoria: this.categoriaSelecionada,
    pais:this.paisSelecionado,
   }
   {
    this.parametrosSelecionados.emit(PARAMETROS);
   }
  }
}
