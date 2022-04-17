import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/core/material.module';
import { TodoListComponent } from './todo-list.component';



@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule],
    exports: [TodoListComponent],
    declarations: [TodoListComponent],
    providers: [],
})
export class TodoListModule { }
