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

  this.todos =[]; }
  
  //adds todo to list
  add(todo) {
    this.todos.push(todo);
  }

  //remove todo from list at given index
  remove(indexOfTodo){
    this.todos.splice(indexOfTodo,1);
  }

  //update todo at a given index
  update(index, updatedTodo) {
    if(index>=0 && index < this.todos.length){
    this.todos[index] = updatedTodo;
  }
  }

  //return all todo list
  getAll(todos){
    return this.todos;
  };

  //return todo at a given index
  get(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todos.length){
    return this.todos[indexOfTodo]
  } return null;
  };

  // delete all todos
  clear(){
    this.todos = []
  };
}



module.exports = Todo;
