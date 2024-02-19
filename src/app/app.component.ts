import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import {BotonesComponent} from "./botones/botones.component";
import { LoginAreaComponent } from "./login-area/login-area.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonesComponent, LoginAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proyect';

  Update(mensaje: any) {
    Swal.fire({
      title: "Deseas guardar cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Guardado',
          text: mensaje,
          showConfirmButton: false,
          timer: 1000
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: 'No guardado',
          text: mensaje,
          showConfirmButton: false,
          timer: 1000
        })
      }
    });
  }

  UpdateUser (mensaje: any) {
    alert(mensaje);
  }

}
