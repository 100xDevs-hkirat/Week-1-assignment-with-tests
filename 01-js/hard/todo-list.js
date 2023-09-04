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
  constructor(){
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo);
  }

  remove(indexOfTodo){
    this.todos.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo){
    if(index >= this.todos.length){
      this.getAll();
    } else {
      this.todos[index] = updatedTodo;
      this.get(index);
    }
  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    if(indexOfTodo >= this.todos.length){
      return null;
    }
    return this.todos[indexOfTodo];
  }

  clear(){
    this.todos = [];
  }
}

module.exports = Todo;


var todoList = new Todo();
todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.update(1, 'Updated Task 2');
    todoList.update(3, 'Invalid Task');
