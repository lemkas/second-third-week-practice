import { Component, OnInit } from '@angular/core';
import { ITodo, TODOSTATUS } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos!: ITodo[];
  filterOptions!: TODOSTATUS;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.todos;
  }

  filterHandler(filter: TODOSTATUS): void {
    this.filterOptions = filter;
  }
}
