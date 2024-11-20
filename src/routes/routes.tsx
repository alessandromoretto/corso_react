import {Home} from "../app/pages/home.tsx";
import {Layout} from "../app/components/layout.tsx";
import {RegisterForm} from "../app/components/registerForm.tsx";

export const routes = [
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "",
                        element: <Home/>,
                    },
                    {
                        path: "register",
                        element: <RegisterForm/>
                    },
                    {
                        path: "contacts",
                        element: <h1>CONTACTS</h1>
                    }
                ]
            },
            // {
            //     path: "login",
            //     element: <h1>Login</h1>,
            // },
        ]

    },
    {
        path: "*",
        element: <h1>NON TROVATA</h1>
    }
]