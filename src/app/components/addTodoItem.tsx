import {AddTodoItemProps, ITodo} from "../../lib/interfaces.ts";
import * as React from "react";
import {useEffect, useState} from "react";
import ValidationService from "../../services/validationService.ts";

export function AddTodoItem({onAddClick}: AddTodoItemProps) {

    const empty = {
        title: '',
        description: '',
        done: false
    };
    const [todoForm, setTodoForm] = useState<ITodo>(empty);
    const [notValid, setNotValid] = useState<boolean>(false);

    useEffect(() => {
        setNotValid(ValidationService.todoIsNotValid(todoForm));
    }, [todoForm]);

    const add = () => {

        onAddClick(todoForm);
        setTodoForm(empty);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        setTodoForm({...todoForm, [name]: type !== 'checkbox' ? value : e.target.checked});
    }

    return (
        <div className={'w-100 mt-4'}>
            <div className={'mx-auto'}>
                <h1 className="text-center">Add Todo</h1>
                <div className="card mx-auto" style={{width: '18rem'}}>
                    <div className="card-body mb-8">
                        <div>
                            <label>Title</label>
                            <input className={''} name="title" value={todoForm.title} onChange={handleInputChange}/>
                            {notValid && <label style={{color: 'red'}}>Required</label>}
                        </div>

                    </div>
                    <button type="button" className="btn btn-success "
                            onClick={add}>Add
                    </button>
                </div>
            </div>
        </div>
    )
}