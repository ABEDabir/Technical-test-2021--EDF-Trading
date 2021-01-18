import {Injectable} from '@angular/core';
import {Task} from '../interfaces/task';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskIm implements Task {


  constructor(description: string, name: string, owner: string, status: string) {
    this.description = description;
    this.name = name;
    this.owner = owner;
    this.status = status;
  }

  description: string;
  name: string;
  owner: string;
  status: string;

}

export class TaskDataService {


  tasks: TaskIm[];

  constructor() {
    this.tasks = [new TaskIm('task1', 'bla', 'bla', 'ongoing'),
      new TaskIm('task2', 'bla', 'bla', 'todo'),
      new TaskIm('task3', 'bla', 'bla', 'todo'),
      new TaskIm('task4', 'bla', 'bla', 'completed')];
  }


  getTasks(): Task[] {
    return this.tasks;
  }

  getTO(): Observable<TaskIm[]> {
    return of(this.tasks);
  }
}
