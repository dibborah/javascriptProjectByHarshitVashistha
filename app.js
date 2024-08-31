import render from "./render.js";
import store, { addTodos, deleteTodo, toggle } from "./store.js";

window.addEventListener('todoschange', () => {
    console.log('event fired');
    render();
});

render();

// form get

const form = document.querySelector('#form');
const todoTitleInput = document.querySelector('#todo-title-input');
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
        // 1st way of access id from parent Node element
        // const id = e.target.parentElement.parentElement.dataset.id;
        // deleteTodo(id);

        // 2nd better way of accessing id from close class name
        const id = e.target.closest('.todo').dataset.id;
        deleteTodo(id);
    }
    // if(e.target.classList.contains('todo-checkbox')) {
    //     toggle(e.target.closest('.todo').dataset.id)
    // }
});

ul.addEventListener('change', (e) => {
    if(e.target.classList.contains('todo-checkbox')) {
        const id = e.target.closest('.todo').dataset.id
        const completed = e.target.checked;
        toggle(id, completed);
    }
});


