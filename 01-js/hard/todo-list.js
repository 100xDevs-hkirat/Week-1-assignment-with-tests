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
    this.count=0
    this.todos=[]
  }
  add(str){
    const todoObj = {}
    this.count += 1
    this.todos.push({id:this.count,todo:str})
  }

  remove(indexOfTodo){
    this.todos = this.todos.filter((todo)=> indexOfTodo !== todo.id)
  }

  update(index, updatedTodo){
    this.todos = this.todos.map((todo)=>{
      if(index == todo.id){
        todo.todo = updatedTodo
      }
    })
  }

  getAll(){
    return todos
  }

  clear(){
    this.count = 0
    this.todos = []
  }

  get(index){
    for(let i = 0 ; i< this.todos.length; i++){
      if(todos[i].id == index){
        return todos[i]
      }
    }
  }
}

module.exports = Todo;
