import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './shared/todolist/todolist.component';
import { TodoComponent } from './shared/todo/todo.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  { path: 'todo', component: TodoComponent  },
  { path: 'todolist', component: TodolistComponent  },
  { path: 'todoform', component: TodoformComponent  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoformComponent,
    TodolistComponent,
    TodoComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
