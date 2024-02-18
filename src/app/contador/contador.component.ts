import { Component } from '@angular/core';
import { Persona} from "../persona";

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  persona:Persona = {
    nombre: 'Raul',
    apellido: 'Pimentel',
    edad: 30
  }

  numero:number = 1;
  decrementar() {
    this.numero--;
    if (this.numero <= 0 ) {
      this.numero = 1;
    }
  }
  incrementar() {
    this.numero += 1;
  }

}
