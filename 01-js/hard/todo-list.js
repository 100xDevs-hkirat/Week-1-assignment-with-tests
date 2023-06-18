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
    //initialized an empty array
    this.arr = [];
  }

  add(todo){
    this.arr.push(todo);
  }
  remove(indexOfTodo){
    let i = 0;
    let n = this.arr.length;
    
    if(indexOfTodo >= n) return this.arr; //check for valid index

    while(i < n && i < indexOfTodo){ //traverse to the given index
      i++;
    }
    while(i+1 < n){
      this.arr[i] = this.arr[i+1]; //movin array left
      i++
    }
    this.arr.pop(); //remove last element
    return this.arr;
  }
  update(index, updatedTodo){
    if(index < this.arr.length) //check valid index
      this.arr[index] = updatedTodo; //updated value
  }
  getAll(){
    return this.arr;
  }
  get(indexOfTodo){
    return (indexOfTodo < this.arr.length) ? this.arr[indexOfTodo]: null 
  }
  clear(){
    this.arr.length = 0;
  }
}

    // let todoList;
    // todoList = new Todo();

    // todoList.add('Task 1');
		// todoList.add('Task 2');
		// todoList.add('Task 3');
    // todoList.remove(1);
    // todoList.remove(0)
    // todoList.getAll()


module.exports = Todo;


