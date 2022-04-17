import { Component, OnInit } from '@angular/core';

@Component({  
  templateUrl: './view/todo-app.component.html',
  styleUrls: ['./view/todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  tarefa: string;


  constructor() { }

  ngOnInit(): void {
  }

  adicionarTarefa(value){
    console.log(value)
  }

}
