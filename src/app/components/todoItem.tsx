import {TodoItemProps} from "../../lib/interfaces.ts";
import {useNavigate} from "react-router-dom";

export function TodoItem({todo, onDoneClick, onRemoveClick}: TodoItemProps) {

    const navigateTo = useNavigate();

    return (
        <div className="card only-on-hover" style={{width: '18rem'}}>
            <div className="card-body mb-8" style={{textDecoration: (todo.done ? 'line-through' : 'unset')}}>
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.description}</p>
            </div>
            {
                !todo.done &&
                <>
                    <button type="button" className="btn btn-primary only-on-hover mb-2" onClick={() => navigateTo('/' + todo.id)}>Edit</button>
                    <button type="button" className="btn btn-primary only-on-hover mb-2" onClick={() => onDoneClick(todo.id)}>Done</button>
                    <button type="button" className="btn btn-danger only-on-hover" onClick={() => onRemoveClick(todo.id)}>Remove</button>
                </>}
        </div>
    )
}