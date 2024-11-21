import * as React from "react";
import {useState} from "react";
import {IRegister} from "../../lib/interfaces.ts";
import {useNavigate} from "react-router-dom";
import {signup} from "../../services/authService.ts";
import validationService from "../../services/validationService.ts";

export function SignupPage() {

    const [register, setRegister] = useState<IRegister>({firstName: "", lastName: "", email: "", password: ""});
    const [ok, setOk] = useState(false);

    const navigator = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validation = validationService.signupValidator(register);
        console.log(validation);
        if (!validation.success) {
            return
        }

        signup(register)
            .then(
                res => {
                    setOk(true);
                    setTimeout(() => {
                        console.log(res);
                        navigator('/login')
                    }, 2000)
                },
                err => console.log(err)
            );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRegister({...register, [name]: value});
    }

    return (
        <div>
            <h1>Signup</h1>
            {ok ?
                <h2>
                    Signup successful !
                </h2>
                :
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First name</label>
                        <input name="firstName" value={register.firstName} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Last name</label>
                        <input name="lastName" value={register.lastName} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input name="email" type="email" value={register.email} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input name="password" type="password" value={register.password} onChange={handleInputChange}/>
                    </div>

                    <button className={'mt-4'}>Register</button>
                </form>}
        </div>
    )
}