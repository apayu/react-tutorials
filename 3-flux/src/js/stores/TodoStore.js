import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos = [
      {
        id: 123,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 124,
        text: "Pay water bills",
        complete: false
      },
    ];
  }

  getAll(){
    return this.todos;
  }
}

const todoStore = new TodoStore;

export default todoStore;
