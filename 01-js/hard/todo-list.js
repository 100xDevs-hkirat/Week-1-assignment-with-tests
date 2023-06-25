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
    this.todoList = [];
  }

  add(todo)
  {
    this.todoList.push(todo);
  }

  remove(indexOfTodo)
  {
    const halfBeforeTheUnwantedElement = this.todoList.slice(0, indexOfTodo)
    const halfAfterTheUnwantedElement = this.todoList.slice(indexOfTodo+1);
    const copyWithoutUnwantedElement = halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement);
    this.todoList = copyWithoutUnwantedElement;
  }


  checkValidIndex(index)
  {
    if(index < 0 || index >= this.todoList.length)
    {
      return false;
    }
    return true;
  }

  update(index, updatedTodo)
  {
    if(this.checkValidIndex(index))
    {
      this.todoList[index] = updatedTodo;
    } 
  }

  getAll()
  {
    return this.todoList;
  }

  get(indexOfTodo)
  {
    if(this.checkValidIndex(indexOfTodo))
    {
      return this.todoList[indexOfTodo];
    }
    else
    {
      return null;
    }
  }

  clear()
  {
    this.todoList = [];
  }

}

module.exports = Todo;
