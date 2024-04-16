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
     this.todo = [];
   }

    add(todo){
     this.todo.push(todo);
   }

  remove(index){
    if(index>=0 && index<todo.length){
      this.todo.splice(index,1);
    }
    else{
      console.log("Index out of range");
    }
      
}

  update(index, updatedVal){
    if(index>=0 && index< todo.length){
        this.todo[index] = updatedVal;
    }
    else{
      console.log("Index out of range");
    }
  }

  getAll(){
    console.log(todo);
  }

  get(){
    if(index>=0 && index < todo.length){
      console.log(this.todo(index)];
    }
    else{
      console.log("Index out of range");
    }
  }

  clear(){
    this.todo = [];
  }
  
let myTodo = new Todo();
myTodo.add("Completing assignment");
myTodo.add("Going to college");
myTodo.add("Completing 20+ videos target");
myTodo.add("Completing 0 to 1 as soon as possible");
myTodo.add("contributing on our group project");

myTodo.getAll();

myTodo.remove(2);
myTodo.getAll();
myTodo.update(2,"Coding atleast 3 hrs a day");
myTodo.getAll();
myTodo.get(2);
    

module.exports = Todo;
