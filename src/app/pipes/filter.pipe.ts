import { Pipe, PipeTransform } from '@angular/core';
import { ITodo, TODOSTATUS } from '../interfaces/todo';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: ITodo[], filterOption: TODOSTATUS): ITodo[] {
    if (filterOption && filterOption !== 'all') {
      return value.filter((todo) => todo.status === filterOption);
    } else {
      return value;
    }
  }
}
