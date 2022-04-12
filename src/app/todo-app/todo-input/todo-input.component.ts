import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodoInputFormService } from './services/todo-input-form.service';

@Component({
  selector: 'todo-input',
  templateUrl: './view/todo-input.component.html',
  styleUrls: ['./view/todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  form!: FormGroup;

  constructor(public formService: TodoInputFormService) {}

  ngOnInit() {
      this.formService.inicializaFormulario();
      this.form = this.formService.form
  }
}
