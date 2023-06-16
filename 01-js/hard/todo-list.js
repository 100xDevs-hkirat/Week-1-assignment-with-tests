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
    this.todolist = []
  }
  add(task){
    this.todolist.push(task)

  }
  remove(index){
    if(index<this.todolist.length){
      const toberemoved = this.todolist[index]
      this.todolist = this.todolist.filter((items)=>items!==toberemoved)
    }
   
  }
  update(index,updatedTodo){
    if(index<this.todolist.length){
      this.todolist[index] =updatedTodo
    }
   
  }
  getAll(){
    return this.todolist;
  }
  get(index){
    if(index<this.todolist.length){
      return this.todolist[index]
    }
    return null
    
  }
  clear(){
    this.todolist = []
    return this.todolist
  }

}


module.exports = Todo;
