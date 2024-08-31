import render from "./render.js";
import store, { addTodos, deleteTodos } from "./store.js";

window.addEventListener('todoschange', () => {
    console.log('event fired');
    render();
});

render();

// form get

const form = document.querySelector('#form');
const todoTitleInput = document.querySelector('#todo-title-input');
const deleteTodoButton = document.querySelectorAll('.delete-todo-button');

const ul = document.querySelector('.todos');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoTitle = todoTitleInput.value;
    if(!todoTitle) return;
    const newTodo = {
        id: crypto.randomUUID(),
        title: todoTitle,
        completed: false
    };
    addTodos(newTodo);
    todoTitleInput.value = '';    
});

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-todo-button')){
        const id = e.target.parentElement.parentElement.dataset.id;
        deleteTodos(id)
    }
})

