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
  this.todos =[];
  
  //adds todo to list
  add(todo);

  //remove todo from list at given index
  remove(indexOfTodo);

  //update todo at a given index
  update(index, updatedTodo);

  //return all todo list
  getAll(todos);

  //return todo at a given index
  get(indexOfTodo);

  // delete all todos
  clear(todos);
}
}
module.exports = Todo;
