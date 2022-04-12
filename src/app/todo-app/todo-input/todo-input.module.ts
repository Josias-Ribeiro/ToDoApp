import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from 'src/app/core/material.module';
import { TodoInputFormService } from './services/todo-input-form.service';
import { TodoInputComponent } from './todo-input.component';

@NgModule({
  imports: [
    MatInputModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,    
    FlexLayoutModule 
  ],
  exports: [TodoInputComponent],
  declarations: [TodoInputComponent],
  providers: [TodoInputFormService],
})
export class TodoInputModule {}
