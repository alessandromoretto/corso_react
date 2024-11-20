import {NavLink} from "react-router-dom";

export function Header(){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contacts'}>Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>Register</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}