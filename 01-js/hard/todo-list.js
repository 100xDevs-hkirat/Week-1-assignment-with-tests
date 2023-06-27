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
  
  data = [];
  add(task){
    this.data.push(task);
  }
  remove(indexOfTodo){
    this.data.splice(indexOfTodo,1);
  }
  update(index,updatedTodo){
    if(index>=this.data.length){
      return;
    }
    this.data[index]=updatedTodo;
  }
  getAll(){
    return this.data;
  }
  get(indexOfTodo){
    if(indexOfTodo>=this.data.length){
      return null;
    }
    return this.data[indexOfTodo];
  }
  clear(){
    this.data = [];

}
a = new Todo();
console.log(a.data)

module.exports = Todo;
