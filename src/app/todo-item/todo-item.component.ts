import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../components/shared/todos.model';
import { DataService } from '../components/shared/data.service';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  body:string = "Add some text ..."
  testModal : Modal | undefined;

  @Input() todoItem!: Todo;
  // @Input() message! : string 
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onTodoClicked(){
    this.todoClicked.emit()
  }

  onEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked() {
    this.deleteClicked.emit()
  }

}
