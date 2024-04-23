let tasks = [];

document.getElementById('addTaskButton').addEventListener('click', function() {
  addTask();
});

function addTask() {
  const newTaskInput = document.getElementById('newTask');
  const taskText = newTaskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a valid task.');
    return;
  }

  tasks.push({ text: taskText, completed: false });
  updateTaskList();
  newTaskInput.value = '';
}

function updateTaskList() {
  const tasksList = document.getElementById('tasks');
  tasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = task.completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompletion(index));

    const taskText = document.createTextNode(task.text);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    tasksList.appendChild(listItem);
  });
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}
