import {createContext} from "react";
import {IAuthContext} from "../../lib/interfaces.ts";


export const AuthContext = createContext<IAuthContext | null>(null)