import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.tsx";
import {IAuthContext} from "../../lib/interfaces.ts";

export function Header(){

    const {tokenContent, handleSetToken, isLogged} = useContext(AuthContext) as IAuthContext;
    const navigator = useNavigate();

    const logout = (e: any) => {
        e.preventDefault();
        handleSetToken('');
        navigator('/login')
    }

    return (
        <>
            {
                isLogged() &&
                <header >
                    <h3>User: {tokenContent.firstName}</h3>
                    <h3 className={'mb-4'}>Email: {tokenContent.email}</h3>
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