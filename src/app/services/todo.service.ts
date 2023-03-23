import { Injectable } from '@angular/core';
import { ITodo, TODOSTATUS } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: ITodo[] = [
    { text: 'Протестировать задачу номер 352', status: TODOSTATUS.INPROGRESS },
    { text: 'Протестировать задачу номер 353', status: TODOSTATUS.DONE },
    { text: 'Протестировать задачу номер 354', status: TODOSTATUS.ARCHIVE },
    { text: 'Протестировать задачу номер 355', status: TODOSTATUS.INPROGRESS },
    { text: 'Протестировать задачу номер 356', status: TODOSTATUS.ARCHIVE },
    { text: 'Протестировать задачу номер 357', status: TODOSTATUS.INPROGRESS },
    { text: 'Протестировать задачу номер 358', status: TODOSTATUS.INPROGRESS },
    { text: 'Протестировать задачу номер 359', status: TODOSTATUS.ARCHIVE },
    { text: 'Протестировать задачу номер 360', status: TODOSTATUS.DONE },
    { text: 'Протестировать задачу номер 361', status: TODOSTATUS.ARCHIVE },
    { text: 'Протестировать задачу номер 362', status: TODOSTATUS.INPROGRESS },
  ];

  public statuses: TODOSTATUS[] = [
    TODOSTATUS.ALL,
    TODOSTATUS.INPROGRESS,
    TODOSTATUS.DONE,
    TODOSTATUS.ARCHIVE,
  ];
}
