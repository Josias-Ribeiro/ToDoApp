import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [TodoAppComponent],
  imports: [    
    FlexLayoutModule,
    CommonModule
  ]
})
export class TodoAppModule { }
