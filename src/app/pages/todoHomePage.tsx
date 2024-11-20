import {useEffect, useState} from "react";
import {ITodo} from "../../lib/interfaces.ts";
import {getAllTodos, removeById, resetDB, setAsDoneById} from "../../services/todoService.tsx";
import {TodoItem} from "../components/todoItem.tsx";
import * as React from "react";

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

    const reset = () => {
        resetDB();
        fetch();
    }
    return (
        <>
            <div className={'p-4 mt-6'}>
                <h1 className={'ml-8'}>Todos: {todos.length}</h1>
                <button type="button" className="btn btn-danger "
                        onClick={reset}>RESET DB
                </button>
                <div className={'todos-container p-4 mx-auto grid grid-cols-4 gap-4 justify-content-center'}>
                    {todos?.map(todo =>
                        <TodoItem key={todo.id} todo={todo} onDoneClick={setAsDone} onRemoveClick={removeTodo}/>
                    )}
                </div>

                {/*<AddTodoItem onAddClick={addTodo}/>*/}

            </div>
        </>
    )
}