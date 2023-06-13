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
      this.list = [];
    }
    add(todo){
      this.list.push(todo);
    }
    remove(indexOfTodo){
      if(indexOfTodo<0 || this.list.length<=indexOfTodo) return;
      this.list.splice(indexOfTodo, 1);
    }
    update(indexOfTodo, updatedTodo){
      if(indexOfTodo<0 || this.list.length<=indexOfTodo) return;
      this.list[indexOfTodo] = updatedTodo;
    }
    get(indexOfTodo){
      if(indexOfTodo<0 || this.list.length<=indexOfTodo) return null;
      return this.list[indexOfTodo];
    }
    getAll(){
      return this.list;
    }
    clear(){
      this.list = [];
    }
}

module.exports = Todo;
