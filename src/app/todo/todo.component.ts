import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  newTodo = '';
  todos: { todo: string; completed: boolean }[] = [];

  todoForm = new FormGroup({
    todo: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit() {}

  addTodo(todo: string) {
    this.todos.push({ todo: todo, completed: false });
  }

  toggleCompleted(todo: { todo: string; completed: boolean }) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: { todo: string; completed: boolean }) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

}
