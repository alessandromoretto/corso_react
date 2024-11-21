import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import {useNavigate, useOutlet} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/authContext.tsx";
import {IAuthContext} from "../../lib/interfaces.ts";

export function Layout(){

    const outlet = useOutlet();
    const {isLogged} = useContext(AuthContext) as IAuthContext;

    const navigator = useNavigate();

    useEffect(() => {

        if (!isLogged() && window.location.pathname !== "/login") {
            navigator('/login')
        }
    })

    return (
        <>
            <Header/>
            <div style={{height: '80dvh'}}>
                {outlet}
            </div>
            <Footer/>
        </>
    )
}