import { Component } from '@angular/core';
import { Estudio } from 'src/estudio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  nombre = "Juan Perez"
  titulo = "Programador Angular / Java"

  estudios: Estudio[] = []


  constructor() {
    this.estudios.push(new Estudio("Analista programador","Institución San Martín","2000-2004"))
    this.estudios.push(new Estudio("Ingeniería petrolera","Universidad del sur","2005-2016"))
    this.estudios.push(new Estudio("Tecnico superior en reposteria","Academia de reposteria","2005-2006"))
    this.estudios.push(new Estudio("Programación Angular","Argentina Programa","2022"))
  }

}
