const todoListKey = 'todoList';

// Load tasks from local storage
const storedTodoList = JSON.parse(localStorage.getItem(todoListKey));
const todoList = storedTodoList ? storedTodoList : [];

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            updateLocalStorage();
            renderTodoList();
        " class="delete-button">Delete</button>
        `;
        todoListHtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
    const inputElement = document.querySelector('.js-todoName');
    const name = inputElement.value;

    const dueDateInput = document.querySelector('.js-due-date');
    const dueDate = dueDateInput.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = "";
    dueDateInput.value = ""; // Clear due date input field

    updateLocalStorage();
    renderTodoList();
}

function updateLocalStorage() {
    localStorage.setItem(todoListKey, JSON.stringify(todoList));
}

function clearTodoList() {
    todoList.length = 0; // Clear the array
    localStorage.removeItem(todoListKey); // Clear local storage
    renderTodoList(); // Update the UI
}

// Initial call to update local storage if there is no data yet
if (!storedTodoList) {
    updateLocalStorage();
}
