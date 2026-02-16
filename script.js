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
    li.textContent = taskText;
    todoList.appendChild(li);

    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li);
    })

    li.addEventListener("click", function (e) {

        if (e.target.tagName === "BUTTON") {
            return;
        }

        li.classList.toggle("completed");
    });

    input.value = "";
});