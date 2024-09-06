const addInput = document.getElementById("add");
const plusButton = document.getElementById("plus");
const taskContainer = document.querySelector(".task");
const clearButton = document.getElementById("clear");
const pendingTasksCount = document.querySelector(".foot p");
let tasks = [];
function addTask() {
  const newTaskText = addInput.value.trim();
  if (newTaskText === "") {
    alert("Iltimos, taskni kiriting.");
    return;
  }
  if (tasks.includes(newTaskText)) {
    alert("Bu task allaqachon mavjud.");
    return;
  }
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = newTaskText;
  newTask.appendChild(taskSpan);

  newTask.addEventListener("click", () => {
    taskContainer.removeChild(newTask);
    tasks = tasks.filter((task) => task !== newTaskText);
    updateTasksCount();
  });
  const existingTask = taskContainer.firstChild;
  if (existingTask) {
    taskContainer.insertBefore(newTask, existingTask);
  } else {
    taskContainer.appendChild(newTask);
  }
  tasks.push(newTaskText);
  addInput.value = "";
  updateTasksCount();
}
function clearAllTasks() {
  taskContainer.innerHTML = "";
  tasks = [];
  updateTasksCount();
}
function updateTasksCount() {
  pendingTasksCount.textContent = `${tasks.length}`;
}
plusButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearAllTasks);