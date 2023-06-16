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
    this.Todo_list = [];
  }
  add(task){
      this.Todo_list.push(task);
  }
  remove(indexOfTodo){
      console.log(" Removed Task : "+this.Todo_list.splice(indexOfTodo,1));
  }
  update(index, task){
      var len = this.Todo_list.length;

      for(var i=0; i<len; i++){
          if(i==index){
              this.Todo_list[i] = task;
          }
      }
  }
  getAll(){
      return this.Todo_list;
  }
  get(index){
      var len = this.Todo_list.length;
      if(index >= len) throw console.error("NO task with that index");

      for(var i=0; i<len; i++){
          if(i==index){
              return this.Todo_list[i];
          }
      }
  }
  clear(){
      this.Todo_list = [];
  }


}

module.exports = Todo;
