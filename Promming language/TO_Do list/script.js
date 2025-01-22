function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const activeTasks = document.getElementById("activeTasks");

        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskContent = document.createElement("p");
        taskContent.textContent = taskText;

        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete-btn");
        completeBtn.textContent = "✓";
        completeBtn.onclick = () => markAsCompleted(taskItem, taskContent);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = () => deleteTask(taskItem);

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        activeTasks.appendChild(taskItem);

        taskInput.value = "";
    }
}

function markAsCompleted(taskItem, taskContent) {
    taskItem.classList.add("completed");
    taskContent.classList.add("completed");
    document.getElementById("completedTasks").appendChild(taskItem);
    taskItem.querySelector(".complete-btn").disabled = true;
}

function deleteTask(task) {
    task.classList.add("fadeOut");
    setTimeout(() => {
        task.remove();
    }, 300);
}
