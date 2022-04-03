import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material.module';
import { TodoInputComponent } from './todo-input.component';



@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [TodoInputComponent],
    declarations: [TodoInputComponent],
    providers: [],
})
export class TodoInputModule { }
