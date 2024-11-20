import {useEffect} from "react";
import {RegisterForm} from "../components/registerForm.tsx";

export function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div>
            <h1>HOME</h1>
            {/*<RegisterForm/>*/}
        </div>
    )
}