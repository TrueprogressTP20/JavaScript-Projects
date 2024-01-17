const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodo');
const addTodoButton = document.getElementById('addTodo');

addTodoButton.addEventListener('click', addTodo);

function addTodo() {
  const todoText = newTodoInput.value.trim();
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo';
    todoItem.innerHTML = `
      <span>${todoText}</span>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
    todoList.appendChild(todoItem);
    newTodoInput.value = '';
    attachTodoListeners(todoItem);
  }
}

function attachTodoListeners(todoItem) {
  const editButton = todoItem.querySelector('.edit');
  const deleteButton = todoItem.querySelector('.delete');
  const todoTextSpan = todoItem.querySelector('span');

  editButton.addEventListener('click', () => {
    const newText = prompt('Edit the todo:', todoTextSpan.textContent);
    if (newText !== null) {
      todoTextSpan.textContent = newText;
    }
  });

  deleteButton.addEventListener('click', () => {
    todoItem.remove();
  });
}