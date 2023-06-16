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
  todoList = []
  
  add(todo){
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    // if (indexOfTodo < 0 || indexOfTodo >= this.todoList.length) {
    //   throw new Error('Invalid index');
    // }
    this.todoList.splice(indexOfTodo, 1);
  }
  
  update(index, updatedTodo){
    this.todoList.splice(index,1,updatedTodo);
  }
  getAll(){
    return this.todoList;
  }
  get(indexOfTodo){
    return this.todoList[indexOfTodo];
  }
  clear(){
    this.todoList=[];
  }
}

module.exports = Todo;
