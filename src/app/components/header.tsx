import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.tsx";
import {IAuthContext} from "../../lib/interfaces.ts";

export function Header(){

    const {user} = useContext(AuthContext) as IAuthContext;

    return (
        <header>
            <h3>User: {user.firstName}</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Todos List</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add'}>Add Todo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}