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
 todos;

 constructor(){
  this.todos = [];
 }

 getAll() {
  return this.todos;
 }

 get(index){
  if(index > this.todos.length -1) return null;
  return this.todos[index];
 }

 add(todo){
  this.todos.push(todo);
 }

 update(index, todo){
  if(index > this.todos.length -1) return
  this.todos[index] = todo;
 }

 clear(){
  this.todos = []
 }

 remove(index){
  if(index > this.todos.length -1) return
  this.todos.splice(index, 1);
 }

}

module.exports = Todo;
