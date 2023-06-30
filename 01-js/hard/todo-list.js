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
    this.todos = [];
    this.add = add,
    this.remove = remove,
    this.update = update,
    this.getAll = getAll,
    this.get = get,
    this.clear = clear
  }
}

function add(task){
  this.todos.push(task);
}

function getAll(){
  return this.todos;
}

function remove(index){
  if(index >= 0 && index < this.todos.length){
    this.todos.splice(index, 1)
  }
}

function update(index, task){
  if(index >= 0 && index < this.todos.length){
    this.todos[index] = task;  
  }
}

function get(index){
  if(index >= 0 && index < this.todos.length){
    return this.todos[index];
  }
  return null;
}

function clear(){
  // console.log(todos);
  // for(let i = 0; i < todos.length; i++){
  //   todos.pop();
  //   console.log(todos);
  // }
  this.todos.splice(0, this.todos.length);
}

// let todoList = new Todo();
// todoList.add('Task 1');
// todoList.add('Task 2');
// todoList.add('Task 3');
// todoList.add('Task 4');

// console.log(todoList.getAll());

// 		todoList.remove(1);
// 		// expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);
//     console.log(todoList.getAll());

// 		todoList.remove(0);
//     console.log(todoList.getAll());
// 		// expect(todoList.getAll()).toEqual(['Task 3']);

// 		todoList.remove(2);
// 		// expect(todoList.getAll()).toEqual(['Task 3']);


// // console.log(todoList.getAll());
// // todoList.update(1, 'UPDATED')
// // todoList.remove(3);
// console.log(todoList.getAll());

/*
class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
  }

  clear() {
    this.todos = [];
  }
}
*/
module.exports = Todo;
