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

  todoList = [];

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= indexOfTodo.length) {
        return;
    } else if (indexOfTodo == 0) {
        this.todoList = this.todoList.slice(1);
    } else if (indexOfTodo == this.todoList.length-1) {
        this.todoList = this.todoList.slice(0, -1);
    } else {
        this.todoList = this.todoList.slice(0, indexOfTodo).concat(this.todoList.slice(indexOfTodo+1));
    }
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todoList.length) {
        return;
    }
    this.todoList[index] = updatedTodo;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length) {
        return null;
    }
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
