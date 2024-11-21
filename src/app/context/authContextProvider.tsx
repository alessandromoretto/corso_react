import {useEffect, useState} from "react";
import {ITokenContent} from "../../lib/interfaces.ts";
import {AuthContext} from "./authContext.tsx";
import {jwtDecode} from "jwt-decode";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {

    const [token, setToken] = useState<string>(localStorage.getItem("token") || '');
    const [tokenContent, setTokenContent] = useState<ITokenContent>({firstName: '', lastName: '', email: '', role: ''});

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
        handleTokenContent();
    },[token]);

    function handleTokenContent() {
        if (!token) {
            setTokenContent({firstName: '', lastName: '', email: '', role: ''});
            return
        }
        const decode = jwtDecode(token);
        setTokenContent(decode as ITokenContent);
    }

    function handleSetToken(data: string) {
        setToken(data);
    }

    const isLogged = () => {
        return !!(tokenContent && tokenContent.email);
    };

    const isAdmin = () => {
        return (tokenContent && tokenContent.role == "admin");
    };

    return (
        <AuthContext.Provider value={{tokenContent, handleSetToken, isLogged, isAdmin, token}}>
            {children}
        </AuthContext.Provider>
    )
}