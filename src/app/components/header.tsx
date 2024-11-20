import {NavLink} from "react-router-dom";

export function Header(){
    return (
        <>
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
        </>
    )
}