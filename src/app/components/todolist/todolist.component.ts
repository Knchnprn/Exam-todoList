import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogModule,MatDialogRef } from '@angular/material/dialog';

import { EditTodolistComponent } from '../edit-todolist/edit-todolist.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todos.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})



export class TodolistComponent implements OnInit {
  

  

  todoList:Todo[] = []
  showValidationErrors: boolean = false;
 

  // messageItem : string = 'hello wow'
 

  constructor(private dataService: DataService, private dialog: MatDialog) { }

   ngOnInit(): void {
     this.todoList = this.dataService.getAllTodo()
  }

  // getAllTodo(){
  //   return this.todoList
  // }

  onFormSubmit(form:NgForm){
   

    console.log("Form submitted")
    console.log('form before : ',form)
    
    
    if (form.invalid) {
      return this.showValidationErrors = true
    }
    this.dataService.addTodo(new Todo (form.value.text))

    form.reset()
    return this.showValidationErrors = false
  }

  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo){
    const index = this.todoList.indexOf(todo)


    let dialogRef = this.dialog.open(EditTodolistComponent,{
      width:'700px', 
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) =>{
      if (result){
        this.dataService.updateTodo(index,result)
      }
    })
    
  }

  deleteTodo(todo:Todo){
    const index = this.todoList.indexOf(todo)
    this.dataService.deleteTodo(index)

  }

}
