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
    let arr = [];
  }
  add(todo){
    arr.push(todo);
  }
  remove(indexOfTodo){
    //let idx = indexOfTodo;
    delete arr[indexOfTodo];
  }
  update(index, updatedTodo){
    arr[index] = updatedTodo;
  }
  getAll{
    return arr;
  }
  get(indexOfTodo){
    return arr[indexOfTodo];
  }
  clear{
    arr.length = 0;
  }
}

module.exports = Todo;
