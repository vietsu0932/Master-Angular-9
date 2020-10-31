import {Compoment} from '@angular/core';
import { TodoList } from "./TodoList";
import { TodoItem } from "./todoItem";

@Compoment({
  selector: 'app-root';
  templateURL: './app.compoment.html';
  styleUrls: ['./appc.compoment.css'];
})
export class AppComponent {
  private list = new TodoList("Bob", [
  new TodoItem("Go for run", true),
  new TodoItem("Get flowers"),
  new TodoItem("Collect tickets"),
  ]);
  get username(): string {
  return this.list.user;
  }
  get itemCount(): number {
  return this.list.items
  .filter(item => !item.complete).length;
  }
  }