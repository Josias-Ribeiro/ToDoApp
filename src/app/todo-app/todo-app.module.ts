import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../core/material.module';
import { TodoAppComponent } from './todo-app.component';
import { TodoInputModule } from './todo-input/todo-input.module';





@NgModule({
  declarations: [TodoAppComponent],
  imports: [        
    CommonModule,    
    MaterialModule, 
    TodoInputModule,
    FlexLayoutModule,
  ], 
  exports:  [TodoAppComponent],
})
export class TodoAppModule { }
