const addBtn = document.getElementById("addBtn");
const userInput = document.getElementById("taskInput");

addBtn.addEventListener("click", function () {
  const userText = userInput.value.trim();
  if (userText !== "") {
    addTask(userText);
    userInput.value = "";
  }
});

function addTask(userText) {
  const taskList = document.getElementById("taskList");
  const taskLi = document.createElement("li");

  // Create a span to hold the task text
  const taskText = document.createElement("span");
  taskText.textContent = userText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(taskLi);
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.addEventListener("click", function () {
    editTask(taskText, taskLi, editBtn);
  });

  // Append elements to taskLi
  taskLi.appendChild(taskText);
  taskLi.appendChild(editBtn);
  taskLi.appendChild(deleteBtn);
  taskList.appendChild(taskLi);
}

function editTask(taskText, taskLi, editBtn) {
  // Store the original task text
  const originalText = taskText.textContent;

  // Replace the task text with an input field
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = originalText;
  taskLi.replaceChild(editInput, taskText);

  // Replace the edit button with a save button
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  taskLi.replaceChild(saveBtn, editBtn);

  saveBtn.addEventListener("click", function () {
    const newText = editInput.value.trim();
    if (newText !== "") {
      taskText.textContent = newText;
    }
    taskLi.replaceChild(taskText, editInput);
    taskLi.replaceChild(editBtn, saveBtn);
  });
}
