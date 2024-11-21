import {useState} from "react";
import {User} from "../../lib/interfaces.ts";
import {AuthContext} from "./authContext.tsx";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<User>({firstName: '', lastName: '', email: ''});

    function handleSetUser(data: User) {
        setUser(data);
        if (data && data.email) {
            localStorage.setItem("token", JSON.stringify("token"));
        } else {
            localStorage.removeItem("token");
        }
    }

    const isLogged = () => {
        return !!localStorage.getItem('token');
    };

    return (
        <AuthContext.Provider value={{user, handleSetUser, isLogged}}>
            {children}
        </AuthContext.Provider>
    )
}