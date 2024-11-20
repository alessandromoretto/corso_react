import {ITodo} from "../lib/interfaces.ts";

export function resetDB() {
    localStorage.setItem('todos', JSON.stringify([
        {id: Math.random(), title: 'basics', description: 'basics', done: false},
        {id: Math.random(), title: 'hooks', description: 'hooks', done: false},
        {id: Math.random(), title: 'styles', description: 'styles', done: false},
        {id: Math.random(), title: 'css', description: 'css', done: false},
        {id: Math.random(), title: 'forms', description: 'forms', done: false},
        {id: Math.random(), title: 'routing', description: 'routing', done: false},
        {id: Math.random(), title: 'security', description: 'security', done: false},
    ]));
}

function read() {
    return JSON.parse(localStorage.getItem('todos')!)
}

function write(data: any) {
    localStorage.setItem('todos', JSON.stringify(data));
}

export function getAllTodos(): ITodo[] {
    return read();
}

export function add(todo: ITodo) {
    todo.id = Math.random();
    let data = read();
    data.push(todo);
    write(data);
}

export function update(id: any, todo: ITodo) {
    let data = read();
    data.forEach(m => {
        if (m.id == id) {
            m.title = todo.title;
            m.description = todo.description;
            m.done = todo.done;
        }
    });
    write(data);
}

export function findById(id: string) {
    let data = read();
    return data.find(m => m.id == id);
}
export function removeById(id: number) {
    let data = read();
    data = data.filter(m => m.id !== id);
    write(data);
}

export function setAsDoneById(id: number) {
    let data = read();
    data = data.map(m => {

        if (m.id == id) {
            m.done = true;
        }
        return m;
    });
    write(data);
}

