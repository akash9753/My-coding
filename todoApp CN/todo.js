let tasks = [];
const tasksList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

 async function fetchToDos() {
  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then(function (response) {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     tasks = data.slice(0, 10);
  //     renderList();
  //     console.log(data);
  //   })
  //   .catch(function (error) {
  //     console.log("error", error);
  //   });
   
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks = data.slice(0,10);
    renderList();
  }catch(error){
    console.log(error);
  }
   
}

function addTaskToDom(task) {
  const li = document.createElement("li");
  li.innerHTML = `
          <input type="checkbox" id="${task.id}" ${
    task.completed ? "checked" : ""
  } class="custom-checkbox">
          <label for="${task.id}">${task.title}</label>
          <img src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" class="delete" data-id="${
            task.id
          }"/>

        `;
  tasksList.append(li);
}

function renderList() {
  tasksList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    addTaskToDom(tasks[i]);
  }
  tasksCounter.innerHTML = tasks.length;
}

function toggleTask(taskId) {
  const task = tasks.filter((task) => {
    return task.id === Number(taskId);
  });
  if (task.length > 0) {
    const currentTask = task[0];
    currentTask.completed = !currentTask.completed;
    renderList();
    showNotification("Task toggled successfully");
    renderList();
  } else {
    showNotification("Could not toggle the task");
  }
}

function deleteTask(taskId) {
  const newTasks = tasks.filter((task) => {
    return task.id != taskId;
  });
  tasks = newTasks;
  renderList();
  showNotification("task deleted successfully");
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    showNotification("task added successfully");
    return;
  }
  showNotification("Task can not be added");
}

function showNotification(text) {
  alert(text);
}

function handleInputKeypress(e) {
  if (e.key === "Enter") {
    const text = e.target.value;
    console.log(text);
    if (!text) {
      showNotification("Task text can not be empty");
      return;
    }
    const task = {
      title: text,
      id: Date.now().toString(),
      completed: false,
    };
    e.target.value = "";
    addTask(task);
  }
}
function handleClickListner(e) {
  const target = e.target;
  console.log(target);

  if (target.className === "delete") {
    const taskId = target.dataset.id;
    deleteTask(taskId);
    return;
  } else if (target.className === "custom-checkbox") {
    const taskId = target.id;
    toggleTask(taskId);
    return;
  }
}

function initializeApp() {
  fetchToDos();
  addTaskInput?.addEventListener("keyup", handleInputKeypress);
  document.addEventListener("click", handleClickListner);
}

initializeApp();
