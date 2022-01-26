import { Injectable } from '@angular/core';
import { Todo } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todoList:Todo[] = [
   
  ]

  constructor() { }

  getAllTodo(){
    return this.todoList
  }

  addTodo(todo: Todo){
    this.todoList.push(todo)
  }

  updateTodo(index:number, updatedTodo: Todo){
    this.todoList[index] = updatedTodo
  }

  deleteTodo(index:number){
    this.todoList.splice(index,1)
  }

}

