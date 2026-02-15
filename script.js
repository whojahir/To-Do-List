// Select Dom Eliments
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

addBtn.addEventListener("click", function() {
    const taskText = input.value;
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    todoList.appendChild(li);
    input.value = "";
})