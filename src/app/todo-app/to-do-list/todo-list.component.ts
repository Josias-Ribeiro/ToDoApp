import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './view/todo-list.component.html',
    styleUrls: ['./view/todo-list.component.css']
})

export class TodoListComponent implements OnInit {    
    @Input() listaTarefas: string[];

    constructor() { }

    ngOnInit() { }     
   
    deletar(index: number){
        this.listaTarefas.splice(index, 1)
    }

    limparListaTarefas(){
        this.listaTarefas.splice(0, this.listaTarefas.length)
    }
    
}