// Initialize the todos array
let todos = [
    'Buy groceries',
    'Walk the dog',
    'Read a book'
];

// Function to render the todo list
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<p class="empty-message">No tasks yet. Add one above!</p>';
        return;
    }

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${todo}
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo() {
    const input = document.getElementById('todoInput');
    const newTodo = input.value.trim();

    if (newTodo) {
        todos.push(newTodo);
        input.value = '';
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Add enter key listener to input
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initial render
renderTodos();