const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


addBtn.addEventListener('click', addTodos);

function addTodos (e){
  e.preventDefault();
  
  const todoItem = inputField.value.trim();

  const div = document.createElement('div');

  const li = document.createElement('li');
  li.className = 'todo-items';
  li.textContent = todoItem;
  div.appendChild(li);


const checkerButton = document.createElement('button');
checkerButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
checkerButton.id = 'checker-button';
div.appendChild(checkerButton);


const deleteButton = document.createElement('button');
deleteButton.id = 'delete-button'
deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
div.appendChild(deleteButton);

if(inputField.value === ''){
  alert('No task to add to the List');
}

else{
todoList.appendChild(div);
}

inputField.value = "";


checkerButton.addEventListener('click', completedTodo);

function completedTodo (e){
  e.preventDefault();
  li.style.textDecoration = 'line-through';
}


checkerButton.addEventListener('dblclick', function(e){
  e.preventDefault()
  li.style.textDecoration = 'none';
})

deleteButton.addEventListener('click', deleteTodo);

function deleteTodo (e){
  e.preventDefault();
  const x = confirm('Are you sure you want to delete this task?');
  if(x){
 todoList.removeChild(div);
  }
}
}
