import * as React from "react";
import {useContext, useState} from "react";
import {IAuthContext, ILogin} from "../../lib/interfaces.ts";
import {useNavigate} from "react-router-dom";
import validationService from "../../services/validationService.ts";
import {loginService} from "../../services/authService.ts";
import {AuthContext} from "../context/authContext.tsx";

export function LoginPage() {

    const {handleSetToken} = useContext(AuthContext) as IAuthContext;
    const [login, setLogin] = useState<ILogin>({email: "a.moretto86@gmail.com", password: "aaaaaaaaaaaa"});
    const [wrongCredz, setWrongCredz] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const navigator = useNavigate();


    const setToken = (data: string) =>{
        handleSetToken(data)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validation = validationService.loginValidator(login);

        if (!validation.success) {
            return
        }

        setWrongCredz(false);
        loginService(login)
            .then(
                res => {
                    setToken(res.token)
                    setRedirecting(true);
                    setTimeout(() => {
                        navigator('/')
                    }, 2000)
                },
                err => {
                    console.log(err)
                        setWrongCredz(err.status === 401);
                }
            );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLogin({...login, [name]: value});
    }

    return (
        <div>
            <h1>Login</h1>

            {redirecting ?
                <h3>Redirecting to Home....</h3>
                :
                <form onSubmit={handleSubmit}>

                <div>
                    <label>Email</label>
                    <input name="email" type="email" value={login.email} onChange={handleInputChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input name="password" type="password" value={login.password} onChange={handleInputChange}/>
                </div>

                {wrongCredz && <h5 style={{color: "red"}}>Wrong Credentials</h5>}
                <button className={'mt-4'}>Login</button>
            </form>}
        </div>
    )
}