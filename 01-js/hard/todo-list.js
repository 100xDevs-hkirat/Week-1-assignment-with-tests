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
  }
  
  add(todo){
    this.todos.push(todo);
  }
  getAll(){
    return this.todos;
  }

  remove(indexOfTodo){
    if(this.todos[indexOfTodo]===undefined){}
    else{
      delete this.todos.splice(indexOfTodo,1);
    }
  }

  update(index, updatedTodo){
    if(this.todos[index]===undefined){}
    else{
      this.todos[index] = updatedTodo;
    }
  }

  get(indexOfTodo){
    if(this.todos[indexOfTodo] === undefined){
      return null;
    }
    return this.todos[indexOfTodo];
  }

  clear(){
    let length = this.todos.length;
    for(let i=0;i<length;i++){
      this.todos.pop();
    }
  }

}

// let t1 = new Todo();
// t1.add("Task 1");
// t1.add("Task 2");
// t1.add("Task 3");
// // console.log(t1.getAll());
// // t1.update(1,'Updated Task 2');
// // // t1.remove(0);
// // console.log(t1.get(1));

// let t2 = new Todo();
// t2.add("Task 1");
// t2.add("Task 2");
// t2.add("Task 3");

// console.log(t2);
// console.log(t2.getAll());
// // t2.clear();
// // console.log(t2.getAll());
// // console.log(t2.get(4));
// t2.remove(1);
// console.log(t2.getAll());

module.exports = Todo;
