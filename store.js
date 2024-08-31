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
        {
            id: '3',
            title: 'Todo list project',
            completed: true
        },
    ]
};

const storeHandlers = {
    // traps (get and set)

    get(target, property){
        // console.log('you are trying to get', property);
        return target[property];
    },
    set(target, property, value){
        // console.log('you are trying to set', property);
        target[property] = value;
        if(property === 'todos'){
            window.dispatchEvent(new Event('todoschange'));
        }
        return true
    }
}

const storeProxy = new Proxy(store, storeHandlers);

function addTodos(newTodo) {
    storeProxy.todos = [...storeProxy.todos, newTodo];
}

function deleteTodos(id) {
    storeProxy.todos = storeProxy.todos.filter((todo) => {
        return todo.id !== id
    });
};

export default storeProxy;
export { addTodos, deleteTodos };
