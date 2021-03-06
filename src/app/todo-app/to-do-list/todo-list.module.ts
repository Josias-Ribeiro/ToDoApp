import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/core/material.module';
import { TodoListComponent } from './todo-list.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, MatListModule, MatDividerModule, MatIconModule],
    exports: [TodoListComponent],
    declarations: [TodoListComponent],
    providers: [],
})
export class TodoListModule { }
