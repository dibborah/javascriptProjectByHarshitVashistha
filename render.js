import store from "./store.js"; // We are using pure vanilla js so we have to write .js as extenstion when importing
// If using frameworks like react .js extension of files are not needed to be written

function render() {
    const ul = document.querySelector('.todos');

    const todosHTML = store.todos.map((todo) => {
        const liHTML = `<li class="todo" data-id="${todo.id}">
            <span class="todo-title ${todo.completed ? 'completed' : ''}">${todo.title}</span>
            <div class="toggle-delete">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} name="completed" class="todo-checkbox">
                <button class="delete-todo-button">x</button>
            </div>
        </li>`;
        return liHTML;
    }).join('');

    ul.innerHTML = todosHTML;
};

export default render;
