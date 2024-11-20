import {Home} from "../app/pages/home.tsx";
import {Layout} from "../app/components/layout.tsx";
import {RegisterForm} from "../app/components/registerForm.tsx";
import {TodoHomePage} from "../app/pages/todoHomePage.tsx";
import {TodoItemForm} from "../app/components/todoItemForm.tsx";
import {AddTodoPage} from "../app/pages/addTodoPage.tsx";
import {EditTodoPage} from "../app/pages/editTodoPage.tsx";

export const routes = [
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "",
                        element: <TodoHomePage/>,
                    },
                    {
                        path: "add",
                        element: <AddTodoPage/>
                    },
                    {
                        path: ":id",
                        element: <EditTodoPage/>
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