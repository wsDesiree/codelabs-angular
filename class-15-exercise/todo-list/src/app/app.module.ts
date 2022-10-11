import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './shared/todolist/todolist.component';
import { SharedComponent } from './shared/shared.component';
import { TodoComponent } from './shared/todo/todo.component';
import { ComponentNameComponent } from './component-name/component-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoformComponent,
    TodolistComponent,
    SharedComponent,
    TodoComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
