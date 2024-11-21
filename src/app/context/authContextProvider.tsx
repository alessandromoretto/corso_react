import {useState} from "react";
import {User} from "../../lib/interfaces.ts";
import {AuthContext} from "./authContext.tsx";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<User>({firstName: 'ale', lastName: '', email: ''});

    function handleSetUser(data: User) {
        setUser(data);
    }

    return (
        <AuthContext.Provider value={{user, handleSetUser}}>
            {children}
        </AuthContext.Provider>
    )
}