#  📝 Todo List Web App

A simple and responsive Todo List Web Application built using HTML, CSS, and Vanilla JavaScript.
This app allows users to add, complete, delete, and persist tasks using Local Storage.

# 🚀 Live Features

➕ Add new tasks
<br>
🗑 Delete tasks
<br>
💾 Data saved in browser using Local Storage
<br>
🎨 Clean and modern UI
<br>
📱 Responsive centered layout

# 🛠️ Technologies Used

• HTML5 – Structure of the application
<br>
• CSS3 – Styling and layout (Flexbox + Gradient + Hover effects)
<br>
• JavaScript (ES6) – DOM manipulation & Local Storage

# 🧠 Concepts Practiced

• DOM Selection (querySelector)
<br>
• Event Listeners
<br>
• Event Delegation
<br>
• classList.toggle()
<br>
• localStorage
<br>
• createElement()
<br>
• Template Literals
<br>
• closest() method

# 📂 Project Structure

Todo-App/
<br>
│── index.html   # Structure
<br>
│── style.css    # Styling
<br>
│── script.js    # Todo-App Logic

# 🧠 How It Works

1️⃣ Adding a Task
  <li> User enters text in the input field.
  <li> Clicks the Add button.
  <li> A new li element is created dynamically.
  <li> Task is saved in localStorage.
    
2️⃣ Completing a Task
<li>Clicking on a task toggles the .completed class.
<li>CSS applies a line-through effect.

3️⃣ Deleting a Task
<li>Clicking the Delete button removes the task.
<li>Updated list is saved again in localStorage.

4️⃣ Data Persistence
<li>Tasks are stored using:
  <br>
  localStorage.setItem("data", todoList.innerHTML);
  <br>
 <li> On page reload:
  <br>
  showData();
   <br>
   <li> Previously saved tasks are restored automatically.

# ▶️ How to Run

1. Clone the repository:
   git clone https://github.com/whojahir/Todo-App.git
2. Open the project folder.
   cd Todo-App
3. Double-click index.html to open in your browser.

# 🔮 Future Improvements

• ✅ Refactor task storage using an array of objects
<br>
• 💾 Store structured data using JSON.stringify() instead of saving innerHTML
<br>
• 🔄 Create a dedicated renderTasks() function for better state management
<br>
• 🧠 Implement proper task state handling (completed: true/false)
<br>
• 🗂 Add task indexing using data-index
<br>
• ✏️ Add Edit Task feature
<br>
• 🧹 Add Clear All button
<br>
• 🔍 Add Task Filters (All / Completed / Pending)
<br>
• 🌙 Add Dark Mode
<br>
• ♿ Improve accessibility

# 👨‍💻 Author

- Jahir Hossain

# 📄 License

This project is open-source and available under the MIT License.
