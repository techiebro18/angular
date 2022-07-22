import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todos: any;
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getToDos();
  }

  private getToDos(): void {
    this.service.getToDos().subscribe(result => {
      this.todos = result;
    });
  }

}
