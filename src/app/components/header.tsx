import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.tsx";
import {IAuthContext} from "../../lib/interfaces.ts";

export function Header(){

    const {user, handleSetUser} = useContext(AuthContext) as IAuthContext;
    const navigator = useNavigate();

    const logout = (e: any) => {
        e.preventDefault();
        handleSetUser({firstName: '', email: '', lastName: ''});
        navigator('/login')
    }

    return (
        <>
            {
                user && user.email &&  <header>
                    <h3>User: {user.firstName}</h3>
                    <h3>Email: {user.email}</h3>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={'/'}>Todos List</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/add'}>Add Todo</NavLink>
                            </li>
                            {/*{!user.email ?*/}
                            {/*    <li>*/}
                            {/*        <NavLink to={'/login'}>Login</NavLink>*/}
                            {/*    </li> :*/}
                            <li >
                                <a href={''} onClick={logout}>Logout</a>
                            </li>
                            {/*}*/}
                        </ul>
                    </nav>
                </header>
            }
        </>
    )
}