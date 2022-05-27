import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent{
  listaCurso: String[] = ['TypeScript', 'Javascript', 'Java EE' , 'C#', 'PHP'];
  habilitar: boolean = true;
  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar)?false:true;
  }

}
