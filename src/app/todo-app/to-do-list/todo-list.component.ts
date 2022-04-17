import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './view/todo-list.component.html',
    styleUrls: ['./view/todo-list.component.css']
})

export class TodoListComponent implements OnInit {    
    @Input() listaTarefas;

    constructor() { }

    ngOnInit() { }    
    
}