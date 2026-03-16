class ToDo {

constructor(description) {

this.description = description;

this.completed = false; 

}

markComplete() {

this.completed = true;

console.log("${this.description}" marked as complete!);

}

class ToDoList {

constructor() {

this.todos = []; 
}

addTodo(description) {

const newTodo = new ToDo(description); 

this.todos.push(newTodo);

this.renderTodoList(); 

}

listTodos() {

return this.todos;

}

markTodoComplete(index) {

if (index >= 0 && index < this.todos.length) {

this.todos[index].markComplete();

this.renderTodoList();

}

}

renderTodoList() {

const todoListElement = document.getElementById('todoList');

todoListElement.innerHTML = '';

this.todos.forEach((todo, index) => {

const listItem = document.createElement('li');

listItem.textContent = todo.description;

if (todo.completed) {

listItem.classList.add('completed');

}


const completeButton = document.createElement('button');

completeButton.textContent = 'Complete';

completeButton.onclick = () => this.markTodoComplete(index);

listItem.appendChild(completeButton);

todoListElement.appendChild(listItem);

});

}


