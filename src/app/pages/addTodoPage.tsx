import {IAuthContext, ITodo} from "../../lib/interfaces.ts";
import {add} from "../../services/todoService.tsx";
import {TodoItemForm} from "../components/todoItemForm.tsx";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.tsx";

export function AddTodoPage() {

    const navigateTo = useNavigate();
    const {isLogged} = useContext(AuthContext) as IAuthContext;

    if (!isLogged()) {
        navigateTo('/login')
    }

    const addTodo = (todo: ITodo) => {
        add(todo);
        navigateTo('/')
    }

    return (
        <>

            {isLogged() && <TodoItemForm onSaveClick={addTodo} buttonLabel={'Add'}/>
            }
        </>
    )
}