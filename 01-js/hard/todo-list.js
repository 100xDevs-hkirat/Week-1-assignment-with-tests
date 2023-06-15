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
  add(todo){
    this.arr.push(todo);
  }
  remove(indexOfTodo){
    //let idx = indexOfTodo;
    // delete this.arr[indexOfTodo];
    let i = 0;
    let n = this.arr.length;
    while(i < n && i < indexOfTodo){
      i++;
    }
    while(i+1 < n){
      this.arr[i] = this.arr[i+1];
      i++
    }
    this.arr.pop();
    for(let x of this.arr){
      console.log(x);
    }
    return this.arr;
  }
  update(index, updatedTodo){
    this.arr[index] = updatedTodo;
  }
  getAll(){
    return this.arr;
  }
  get(indexOfTodo){
    return this.arr[indexOfTodo];
  }
  clear(){
    this.arr.length = 0;
}

module.exports = Todo;


