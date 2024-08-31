const store = {
    todos: [
        {
            id: '1',
            title: 'Js Mastery 1',
            completed: false
        },
        {
            id: '2',
            title: 'Zustand Tutorial',
            completed: true
        },
    ]
};

const storeHandlers = {
    // traps (get and set)

    get(target, property){
        return target[property];
    },
    set(target, property, value){
        target[property] = value;
        if(property === 'todos'){
            window.dispatchEvent(new Event('todoschange'));
        };
        localStorage.setItem('store', JSON.stringify(target));
        return true
    }
}

const storeProxy = new Proxy(store, storeHandlers);

// localStorage.setItem('store', JSON.stringify(storeProxy));
// const localStorageItems = JSON.parse(localStorage.getItem('store'));


function addTodos(newTodo) {
    storeProxy.todos = [...storeProxy.todos, newTodo];
}

function deleteTodo(id) {
    storeProxy.todos = storeProxy.todos.filter((todo) => {
        return todo.id !== id
    });
};

function toggle(id, completed) {
    storeProxy.todos = storeProxy.todos.map((todo) => {
        if( todo.id === id){
            return {...todo, completed };
        }
        return todo;
    })
};

export default storeProxy;
export { addTodos, deleteTodo, toggle };
