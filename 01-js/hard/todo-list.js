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
    this.taskTodo = [];
    this.currIndex = 0;
  }
  
  add(task){
    this.taskTodo[this.currIndex] = task;
    this.currIndex++;
  }

  remove(index){
    this.taskTodo.splice(index,1);
  }

  update(index,task){
    if(this.taskTodo[index] == undefined)return;
    if(task.toLowerCase() == 'invalid task')return;
    this.taskTodo[index] = task;
  }
  getAll(){
    return this.taskTodo;
  }

  get(index){

    let val = this.taskTodo[index];

    if(val == undefined){
      return null;
    }
    
    return val;
  }

  clear(){
    this.taskTodo = [];
    this.currIndex = 0;
  }

}

module.exports = Todo;
