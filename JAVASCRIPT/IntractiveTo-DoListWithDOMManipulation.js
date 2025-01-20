// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

// Add a task to the list
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Add a delete button to the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
      updateTaskCounter();
    });

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";

    // Update the task counter
    updateTaskCounter();
  }
});

// Update the task counter
function updateTaskCounter() {
  const tasksRemaining = taskList.children.length;
  taskCounter.textContent = `${tasksRemaining} task${tasksRemaining === 1 ? "" : "s"} remaining`;
}
