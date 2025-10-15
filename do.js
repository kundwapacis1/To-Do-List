// SELECT ELEMENTS
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// STORE TASKS IN ARRAY
let tasks = [];

//ADD BUTTON CLICK EVENT
addBtn.addEventListener("click", addTask);

// FUNCTION TO ADD TASK
function addTask() {
    const taskText = input.Value.trim();
    if (taskText !== ""){
        alert("please enter a task");
        return;
    }
    // ADD TO ARRAY
    tasks.push(taskText);

    //CREATE LIST <LI> AND ADD TO LIST

    const li = document.createElement("li");
    li.textContent =taskText;

    //REMOVE TASK WHEN CLICKED
    li.addEventListener("click", function(){
        li.remove();
        tasks = tasks.filter(t => t !== taskText);
    });
    taskList.appendChild(li);
    input.value = ""
}