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
  todos = []

  add( todo ) {
    this.todos.push( todo );
  }

  remove( indexOfTodo ) {
    if ( indexOfTodo >= this.todos.length)
      return false;

    this.todos.splice(indexOfTodo,1);

  }

  update( indexOfTodo, updatedTodo){
    if ( indexOfTodo < this.todos.length)
      return this.todos[indexOfTodo] = updatedTodo;

  }

  get( indexOfTodo){
    if( indexOfTodo >=0 && indexOfTodo < this.todos.length){
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear(){
    this.todos = [];
  }

  getAll(){
    return this.todos;
  }

}

module.exports = Todo;
