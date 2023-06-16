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
    this.arr = []
  }
  add(todo){
    this.arr.push(todo)
    return this.arr
  }
  remove(ind){
    if(ind >= this.arr.length) return this.arr
    this.arr.splice(ind,1);
    return this.arr
  }
  update(ind,variable){
    if(ind >= this.arr.length) return this.arr
    this.arr[ind] = variable
    return this.arr
  }
  getAll(){
    return this.arr
  }
  get(ind){
    if(ind >= this.arr.length) return null
    return this.arr[ind]
  }
  clear(){
    this.arr = []
    return this.arr
  }
}

module.exports = Todo;
