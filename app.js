import render from "./render.js";

const store = render();

const todos = store.todos;

const ul = document.querySelector('.todos.container');

todos.forEach((todo) => {
    const liHTML = `<li class="todo" data-id="${todo.id}">
            <span class="todo-title">${todo.title}</span>
            <div class="toggle-delete">
                <input type="checkbox" name="completed" class="todo-checkbox">
                <button class="delete-todo-button">x</button>
            </div>
        </li>`;
    const temporary_ul = document.createElement('ul');
    temporary_ul.innerHTML = liHTML;
    const li = temporary_ul.childNodes[0];
    ul.append(li);
});