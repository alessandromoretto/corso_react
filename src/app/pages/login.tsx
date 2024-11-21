import * as React from "react";
import {useContext, useState} from "react";
import {AuthContext} from "../context/authContext.tsx";
import {IAuthContext, User} from "../../lib/interfaces.ts";

export function Login() {

    const {handleSetUser} = useContext(AuthContext) as IAuthContext;

    const [user, setUser] = useState<User>({firstName: "", lastName: "", email: ""});


     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         handleSetUser(user);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name</label>
                    <input name="firstName" value={user.firstName} onChange={handleInputChange}/>
                </div>

                <div>
                    <label>Last name</label>
                    <input name="lastname" value={user.lastName} onChange={handleInputChange}/>
                </div>

                <div>
                    <label>Email</label>
                    <input name="email" type="email" value={user.email} onChange={handleInputChange}/>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}