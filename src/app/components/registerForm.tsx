import {FormEvent, useEffect, useState} from "react";
import * as React from "react";
import {UserFormData} from "../../lib/interfaces.ts";

export function RegisterForm() {

    const [users, setUSers] = useState<UserFormData[]>([]);

    const [registerForm, setRegisterForm] = useState<UserFormData>({
        firstName: "",
        enabled: true,
        category: 0
    });

    useEffect(() => {
        console.log(users);
    }, [users]);

    const categories = [
        {id: 1, label: 'Backend'},
        {id: 2, label: 'Frontend'},
        {id: 3, label: 'FullStack'},
        {id: 4, label: 'DevOps'},
    ]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(registerForm);
        setUSers([...users, registerForm]);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        setRegisterForm({...registerForm, [name]: type !== 'checkbox' ? value : e.target.checked});
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name</label>
                    <input name="firstName" value={registerForm.firstName} onChange={handleInputChange}/>
                </div>

                <div>
                    <label>Enabled</label>
                    <input name="enabled" type="checkbox" checked={registerForm.enabled} onChange={handleInputChange}/>
                </div>

                <div>
                    <label>Group</label>
                    <select name="category" onChange={handleInputChange}>
                        {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.label}</option>)}
                    </select>
                </div>

                <div>
                    <button>Registrati</button>
                    <button type={'reset'}>Reset</button>
                </div>
            </form>
        </>
    )
}