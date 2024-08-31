import render from "./render.js";
import store from "./store.js";

window.addEventListener('todos_change', () => {
    console.log('todos is changed');
    render();
});

// store.todos = [];
render();
