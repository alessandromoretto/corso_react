import {ITodo} from "../lib/interfaces.ts";

export function getAllTodos(): ITodo[] {
    return mock;
}

export function add(todo: ITodo) {
    todo.id = Math.random();
    mock.push(todo);
}

export function removeById(id: number) {
    mock = mock.filter(m => m.id !== id);
}

export function setAsDoneById(id: number) {
    mock = mock.map(m => {

        if (m.id == id) {
            m.done = true;
        }
        return m;
    });
}
let mock: ITodo[] = [
    {id: Math.random(), title: 'basics', description: 'basics', done: false},
    {id: Math.random(), title: 'hooks', description: 'hooks', done: false},
    {id: Math.random(), title: 'styles', description: 'styles', done: false},
    {id: Math.random(), title: 'css', description: 'css', done: false},
    {id: Math.random(), title: 'forms', description: 'forms', done: false},
    {id: Math.random(), title: 'routing', description: 'routing', done: false},
    {id: Math.random(), title: 'security', description: 'security', done: false},
]
