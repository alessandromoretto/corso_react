import {ITodo} from "../../lib/interfaces.ts";
import {add} from "../../services/todoService.tsx";
import {TodoItemForm} from "../components/todoItemForm.tsx";
import {useNavigate} from "react-router-dom";

export function AddTodoPage() {

    const navigateTo = useNavigate();


    const addTodo = (todo: ITodo) => {
        add(todo);
        navigateTo('/')
    }

    return (
        <>

                <TodoItemForm onSaveClick={addTodo} buttonLabel={'Add'}/>

        </>
    )
}