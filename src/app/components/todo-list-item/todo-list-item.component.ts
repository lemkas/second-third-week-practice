import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: ITodo;
  constructor() {}

  ngOnInit(): void {}
}
