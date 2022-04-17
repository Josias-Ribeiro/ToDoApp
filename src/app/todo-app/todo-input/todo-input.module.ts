import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from 'src/app/core/material.module';
import { TodoInputFormService } from './services/todo-input-form.service';
import { TodoInputComponent } from './todo-input.component';
import {MatButtonModule} from '@angular/material/button'


@NgModule({
  imports: [
    MatInputModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,    
    FlexLayoutModule ,
    MatButtonModule,
    MatIconModule
    
  ],
  exports: [TodoInputComponent],
  declarations: [TodoInputComponent],
  providers: [TodoInputFormService],
})
export class TodoInputModule {}
