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
  constructor(todoList){
    this.todoList = []
    }
    add(todo){ 
      const arr =this.todoList.push(todo)
      return arr
    }
    remove(index){
      const arr =this.todoList
        arr.splice(index, 1)
      return arr
    }
    update(index, updatedTodo){
      const arr = this.todoList
      if(index > (arr.length-1)){
        return arr
      }else{
        arr[index] = updatedTodo
        return arr
      }
    }
    get(indexofTodo){
      const arr = this.todoList
      if(indexofTodo > (arr.length-1)){
        return null
      }else{
        return arr[indexofTodo]
      }
    }
    getAll(){
      const arr =  this.todoList
      return arr
    }
    clear(){
      this.todoList = []
      return this.todoList
    }
}

module.exports = Todo;
