// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Store tasks in array
let tasks = [];

// Add button click event
addBtn.addEventListener("click", addTask);

// Function to add task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Add to array
  tasks.push(taskText);

  // Create <li> and add to list
  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task when clicked
  li.addEventListener("click", function() {
    li.remove();
    tasks = tasks.filter(t => t !== taskText); // remove from array
  });

  taskList.appendChild(li);
  input.value = "";
}
