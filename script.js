// Select Dom Eliments
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

addBtn.addEventListener("click", function () {
    const taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create List Item
    const li = document.createElement("li");

    li.innerHTML = `
    <span class="task-text">${taskText}</span>
        <button>Delete</button>`;
    todoList.appendChild(li);

    input.value = "";
    saveData();
});

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        const li = e.target.closest("li");
        // e.target.parentElement.remove();
        li.remove();
        saveData();
        return;
    }

    const li = e.target.closest("li");
    if (li) {
        li.classList.toggle("completed");
        saveData();
    }

    // if (e.target.tagName === "LI") {
    //     e.target.classList.toggle("completed");
    //     saveData();
    // }
});

function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function showData() {
    todoList.innerHTML = localStorage.getItem("data");
}
showData();