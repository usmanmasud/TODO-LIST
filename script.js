const todoList =  [{
    name: 'code',
    dueDate: '2024-07-06',
}, {
    name: 'read',
    dueDate: '2024-07-06'
    
}];

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
            renderTodoList();
        " class="delete-button">Delete</button>
        
        `;
        todoListHtml += html;

       }
           document.querySelector('.js-todo-list').innerHTML = todoListHtml
 
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

    inputElement.value = ""

    renderTodoList();
}