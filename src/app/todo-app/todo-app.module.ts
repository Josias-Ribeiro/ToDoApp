import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from '../core/material.module';
import { TodoAppComponent } from './todo-app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoInputModule } from './todo-input/todo-input.module';





@NgModule({
  declarations: [TodoAppComponent, TodoInputComponent],
  imports: [        
    CommonModule,
    FlexLayoutModule,
    MaterialModule,

    TodoInputModule
  
  ], 
  exports:  [TodoAppComponent],
})
export class TodoAppModule { }
