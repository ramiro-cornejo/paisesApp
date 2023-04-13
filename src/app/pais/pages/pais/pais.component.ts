import { Component } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent  {

  termino: string = '';

  constructor() { }

  buscar() {
    console.log(this.termino);
  }
}
