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
	constructor(todos = []) {
		this.todos = todos;
	}

	add(todo) {
		this.todos.push(todo);
	}

	remove(todoIdx) {
		this.todos.splice(todoIdx, 1);
	}

	update(idx, updatedTodo) {
		if (idx >= this.todos.length) return;
		this.todos[idx] = updatedTodo;
	}

	getAll() {
		return this.todos;
	}

	get(idx) {
		return this.todos[idx] ?? null;
	}

	clear() {
		this.todos = [];
	}
}

module.exports = Todo;
