import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material.module';
import { TodoListModule } from './to-do-list/todo-list.module';
import { TodoAppComponent } from './todo-app.component';
import { TodoInputModule } from './todo-input/todo-input.module';





@NgModule({
  declarations: [TodoAppComponent],
  imports: [        
    CommonModule,    
    MaterialModule,
    FlexLayoutModule,

    TodoInputModule,
    TodoListModule,
  ], 
  exports:  [TodoAppComponent],
})
export class TodoAppModule { }
