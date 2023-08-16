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

  constructor(todo)
  {
    this.todo=[]
  }

  add(todo)
  {
    this.todo.push(todo);
  }
  remove(indexOfTodo)
  {
      this.todo=this.todo.filter((task)=>task!==this.todo[indexOfTodo])
  }

  update(index, updateTodo)
  {
    if(index>this.todo.length-1)
    {
     return
    }
    return this.todo[index]=updateTodo;
  }

  getAll()
  {
    return this.todo;
  }
  get(indexOfTodo)
  {
    if(indexOfTodo>=this.todo.length) return null;
    return this.todo[indexOfTodo]
  }
  clear()
  {
    this.todo=[]
  }
}

module.exports = Todo;
