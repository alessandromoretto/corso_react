import {useEffect, useState} from "react";
import {ITodo} from "../../lib/interfaces.ts";
import {add, getAllTodos, removeById, setAsDoneById} from "../../services/todoService.tsx";
import {TodoItem} from "../components/todoItem.tsx";
import {AddTodoItem} from "../components/addTodoItem.tsx";

export function TodoHomePage() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetch();
    },[])

    const fetch = () => {
        setTodos(getAllTodos());
    }

    const removeTodo = (id: number) => {
        removeById(id)
        fetch();
    }

    const setAsDone = (id: number) => {
        setAsDoneById(id)
        fetch();
    }

    const addTodo = (todo: ITodo) => {
        add(todo);
        fetch();
    }

    return (
        <>
            <div className={'p-4 mt-6'}>
                <h1 className={'ml-8'}>Todos: {todos.length}</h1>
                <div className={'todos-container p-4 mx-auto grid grid-cols-4 gap-4 justify-content-center'}>
                    {todos?.map(todo =>
                        <TodoItem key={todo.id} todo={todo} onDoneClick={setAsDone} onRemoveClick={removeTodo}/>
                    )}
                </div>

                <AddTodoItem onAddClick={addTodo}/>

            </div>
        </>
    )
}