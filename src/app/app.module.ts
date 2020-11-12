import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { NavComponent } from './components/templates/nav/nav.component';
import { GroupComponent } from './components/templates/group/group.component';
import { CardComponent } from './components/templates/card/card.component';
import { FormComponent } from './components/templates/form/form.component';
import { CategoryComponent } from './components/templates/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TodoListComponent,
    NavComponent,
    GroupComponent,
    CardComponent,
    FormComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
