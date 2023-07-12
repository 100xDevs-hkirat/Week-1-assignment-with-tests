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
    this.toDoList = []
  }

  add(params) {
    this.toDoList.push(params)
  }

  get(index){
    if(index>this.toDoList.length-1){
      return null
    }
    else{
      return this.toDoList[index]
    }
  }

  getAll(){
    return this.toDoList
  }

  remove(index){
    if (index > -1) { 
      this.toDoList.splice(index, 1);
    }
  }

  update(index,toUpdate){
    if(index>this.toDoList.length-1){
      return this.toDoList
    }
    else{
      this.toDoList[index]=toUpdate
    }
  }

  clear(){
    this.toDoList = []
  }
}

module.exports = Todo;
