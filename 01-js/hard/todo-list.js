/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length) {
      this.todoList.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todoList.length) {
      return this.todoList[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todoList.length = 0;
  }
}

let newList = new Todo();
newList.add("1");
newList.add("2");
newList.add("3");
newList.add("4");
newList.add("5");
newList.add("6");
newList.add("7");
console.log(newList.todoList);
newList.remove(0);
console.log(newList.todoList);
newList.update(1, "Updated");
console.log(newList.todoList);
console.log(newList.getAll());
console.log(newList.get(2));
newList.clear();
console.log(newList.todoList);

module.exports = Todo;
