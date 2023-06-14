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
  constructor(list = []) {
    this.todoList = []
  }
  add(todo){
    this.todoList.push(todo)
  }
  remove(indexofTodo){
    if (indexofTodo > -1) {
      this.todoList.splice(indexofTodo, 1);
    }
  }
  update(indexOfTodo,val){
    if (indexOfTodo < this.todoList.length) {
      this.todoList[indexOfTodo] = val
    }
  }
  getAll(){
    console.log(this.todoList)
    return this.todoList
  }
  get(indexOfTodo){
    if (indexOfTodo > this.todoList.length - 1) return null;
    return this.todoList[indexOfTodo]?this.todoList[indexOfTodo]:null;
  }
  clear(){
    this.todoList = []
  }
}



module.exports = Todo;
