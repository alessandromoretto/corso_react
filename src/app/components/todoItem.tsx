import {TodoItemProps} from "../../lib/interfaces.ts";

export function TodoItem({todo, onDoneClick}: TodoItemProps) {
    return (
        <div className="card only-on-hover" style={{width: '18rem'}}>
            <div className="card-body mb-8">
                <h5 className="card-title">{todo.title}</h5>
                <p className="card-text">{todo.title}</p>
            </div>
            <button type="button" className="btn btn-primary only-on-hover" onClick={() => onDoneClick(todo.id)}>Done</button>
        </div>
    )
}