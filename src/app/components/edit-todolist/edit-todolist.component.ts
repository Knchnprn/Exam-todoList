import { Component, Inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todos.model';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';




@Component({
  selector: 'app-edit-todolist',
  templateUrl: './edit-todolist.component.html',
  styleUrls: ['./edit-todolist.component.css']
})
export class EditTodolistComponent implements OnInit {
  

  body:string = "Add some text ..."
  testModal : Modal | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditTodolistComponent>,
    @Inject(MAT_DIALOG_DATA) public todo:Todo
    
  ){}

  ngOnInit(): void {
    
  }

  open(){
    this.testModal = new bootstrap.Modal(document.getElementById('testModal') as HTMLElement ,{
      keyboard: false
    })
    this.testModal?.show
  }

  close() {
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm) {
    // if (form.invalid) return
    
    const updatedTodo = {
      ...this.todo,
      ...form.value
    }
    
    this.dialogRef.close(updatedTodo)
    console.log("output")
  }

}
  


