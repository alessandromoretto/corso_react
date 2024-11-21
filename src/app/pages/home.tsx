import {useEffect} from "react";

export function HomePage() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div>
            <h1>GESTIONE CORSI</h1>
            {/*<RegisterForm/>*/}
        </div>
    )
}