import {ITodo} from "../../lib/interfaces.ts";
import {findById, update} from "../../services/todoService.tsx";
import {TodoItemForm} from "../components/todoItemForm.tsx";
import {useNavigate, useParams} from "react-router-dom";

export function EditTodoPage() {

    let { id } = useParams();

    const element = findById(id!);
    const navigateTo = useNavigate();

    const _update = (todo: ITodo) => {
        update(id, todo);
        navigateTo('/')
    }

    return (
        <>
            <TodoItemForm onSaveClick={_update} value={element} buttonLabel={'Update'}/>
        </>
    )
}