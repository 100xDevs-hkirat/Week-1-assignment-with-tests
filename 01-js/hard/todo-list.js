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
    this.task=[]
  }

  add(todo){
    this.task.push(todo)
  }
  
  remove(indexOfTodo){
    if (indexOfTodo >=-1 && indexOfTodo<= this.task.length -1){
      this.task.splice(indexOfTodo,1)
    }
  }

  update(index,updatedTodo){
    if (index >-1 && index <= this.task.length -1){
      this.task[index]=updatedTodo
    }
  }
  
  getAll(){
    return this.task
  }

  get(indexOfTodo){
    var index= (indexOfTodo >-1 && indexOfTodo <= this.task.length -1) ? this.task[indexOfTodo] : null;
    return index
  }  
  
  clear(){
    this.task=[]
  }
}

todoList = new Todo()

module.exports = Todo;
