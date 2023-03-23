import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TODOSTATUS } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
})
export class FilterInputComponent implements OnInit {
  statuses: TODOSTATUS[] = this.todoService.statuses;
  @Output() getFilter = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  filter(event: any): void {
    this.getFilter.emit(event.target.value);
  }
}
