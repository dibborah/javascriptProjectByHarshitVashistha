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
    get(target, property){
        console.log('you are trying to get', property);
        return target[property];
    },
    set(target, property, value){
        console.log('you are trying to set', property);
        if(property === 'todos'){
            window.dispatchEvent(new Event('todos_change'));
        }
        return target[property] = value;
    }
}

const storeProxy = new Proxy(store, storeHandlers);

export default storeProxy;
