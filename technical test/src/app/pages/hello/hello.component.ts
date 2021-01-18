import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskIm, TaskDataService} from '../../services/task-data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.sass'],
  encapsulation: ViewEncapsulation.None,
  providers: [TaskDataService]
})
export class HelloComponent implements OnInit {

  allTasks: TaskIm[];
  selectedTask: TaskIm[];
  draggedTask: TaskIm;

  constructor(private taskSer: TaskDataService) {

  }

  ngOnInit(): void {
    this.selectedTask = [];
    console.log(this.taskSer.getTasks());
    this.taskSer.getTO().subscribe(task => this.allTasks = [...task]);

  }

  dragStart(event, task: TaskIm): void {
    this.draggedTask = task;
    console.log(this.draggedTask);
  }

  dragEnd(event): void {
    this.draggedTask = null;
  }

  dropTodo(event): void {
    if (this.draggedTask) {
      console.log(this.draggedTask.status);
      this.draggedTask.status = 'todo';
      console.log(this.draggedTask.status);
    }

  }
  dropOngoing(event): void {
    if (this.draggedTask) {
      console.log(this.draggedTask.status);
      this.draggedTask.status = 'ongoing';
      console.log(this.draggedTask.status);
    }

  }
  dropCompleted(event): void {
    if (this.draggedTask) {
      console.log(this.draggedTask.status);
      this.draggedTask.status = 'completed';
      console.log(this.draggedTask.status);
    }

  }
}
