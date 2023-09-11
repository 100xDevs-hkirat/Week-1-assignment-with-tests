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
     constructor () {
      this.todoArr = [];
     }

     add (tasks) {
        this.todoArr.push(tasks);
     }

     get (n) {
      if(n >= this.todoArr.length) return null;
      return this.todoArr[n];
     }

     getAll () {
      return this.todoArr;
     }

     remove(n) {
      return this.todoArr = this.todoArr.filter((task)=> task !== this.todoArr[n]);
     }

     update(n , task) {
      let arrayLength = this.todoArr.length
      if (n >= arrayLength) return                    
      return this.todoArr[n] = task;
     }

     clear() {
      this.todoArr = [];
     }

}


module.exports = Todo;
