import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoAppModule } from './todo-app/todo-app.module';


@NgModule({
  declarations: [
  AppComponent,
    
  ],
  imports: [MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    TodoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
