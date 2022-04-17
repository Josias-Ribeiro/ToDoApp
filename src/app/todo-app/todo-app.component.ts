import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({  
  templateUrl: './view/todo-app.component.html',
  styleUrls: ['./view/todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  listaTarefas = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  adicionarTarefa(tarefa: string){
    this.listaTarefas.push(tarefa)
  }

}
