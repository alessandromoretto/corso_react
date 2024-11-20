import {ITodo} from "../lib/interfaces.ts";

export function getAllTodos(): ITodo[] {
    return mock;
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
let mock = [
    {id: Math.random(), title: 'basics', done: false},
    {id: Math.random(), title: 'hooks', done: false},
    {id: Math.random(), title: 'styles', done: false},
    {id: Math.random(), title: 'css libraries', done: false},
    {id: Math.random(), title: 'forms', done: false},
    {id: Math.random(), title: 'routing', done: false},
    {id: Math.random(), title: 'security', done: false},
]
