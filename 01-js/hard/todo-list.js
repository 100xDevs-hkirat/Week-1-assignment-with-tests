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
      this.todoList=[]
    }

    add(str)
    {
      this.todoList.push(str)
    }
    remove(i)
    {
      this.todoList.splice(i,1)
    }
    update(i,str)
    {
      this.todoList[i]=str
    }
    getAll()
    {
      return this.todoList
    }
    get(i)
    {
      return this.todoList[i]
    }
    clear()
    {
      this.todoList = []
    }
}

// var todo = new Todo();
// todo.add("hello");
// todo.add("do this again");
// todo.add("lets code");
// todo.add("Go to sleep");
// console.log(todo.getAll())
// todo.remove(1);
// console.log(todo.getAll())
// todo.update(1 ,"changing this")

// console.log(todo.getAll())
// console.log(todo.get(2))
// todo.clear()
// console.log(todo.getAll())

module.exports = Todo;
