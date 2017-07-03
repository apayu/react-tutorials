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

  createTodo(text){
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll(){
    return this.todos;
  }
}

const todoStore = new TodoStore;
window.todoStore = todoStore;
export default todoStore;
