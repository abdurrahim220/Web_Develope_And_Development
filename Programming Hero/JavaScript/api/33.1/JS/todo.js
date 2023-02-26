
function loadTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodo(data))
}

function displayTodo(todos){
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>Title : ${todo.title}</h3>
        <p>User: ${todo.user}</p>
        <p>Is completed: ${todo.completed === true ? 'completed' : 'not completed'}</p>
        `;
        todoContainer.appendChild(todoDiv)
    }
}