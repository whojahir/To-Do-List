const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

let tasks = [];

addBtn.addEventListener("click", function () {

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    saveData();
    renderTasks();

    input.value = "";
});

function renderTasks() {

    todoList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button data-index="${index}">Delete</button>
        `;

        todoList.appendChild(li);
    });
}
function saveData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadData() {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}

loadData();

todoList.addEventListener("click", function (e) {

    const li = e.target.closest("li");
    if (!li) return;

    const index = li.querySelector("button").dataset.index;

    // Delete
    if (e.target.tagName === "BUTTON") {
        tasks.splice(index, 1);
        saveData();
        renderTasks();
        return;
    }

    // Toggle complete
    tasks[index].completed = !tasks[index].completed;
    saveData();
    renderTasks();
});